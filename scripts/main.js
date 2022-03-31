import { whitelistAddresses, addresses } from './merkle.js?ver=1.0.0'
import { ABI } from './abi.js';


// Moralis load
const serverUrl = "https://gg7nilrspbep.usemoralis.com:2053/server";
const appId = "gH2426wZlJIXypjOokoU96cVpDocAqR3t71NX9ln";
Moralis.start({ serverUrl, appId });


// login
var walletAddress = "0x";
getTotalSupply();

async function loginWeb3() {
  const isMetaMaskInstalled= await Moralis.isMetaMaskInstalled();
  if(isMetaMaskInstalled === false) {
    document.getElementById('claimable').innerHTML = "You don't have MetaMask installed...";
    return
  }
  // ethers.js
  const web3 = await Moralis.enableWeb3();
//   await Moralis.enableWeb3();
// const web3 = new Web3(Moralis.provider);
  const chainId = await Moralis.getChainId();
  if(chainId != 1) {
    const newChainId = 1;
    const chainIdHex = await Moralis.switchNetwork(newChainId);
  }
  // const getAccounts = await web3.eth.getAccounts();
  // ethers.js
  const getAccounts = await web3.listAccounts();
  walletAddress = getAccounts[0];
  const ethFirst = walletAddress.substring(0,4);
  const ethLast = walletAddress.substring(38,42);
  const fullAddress = `${ethFirst}...${ethLast}`;
  document.getElementById('connect').innerHTML = fullAddress;
  start();
}

async function loginWalletConnect() {
  const web3 = await Moralis.enableWeb3({ provider: "walletconnect", chainId: 1 });
  // const getAccounts = await web3.eth.getAccounts();
  const getAccounts = await web3.listAccounts();
  walletAddress = getAccounts[0];
  const ethFirst = walletAddress.substring(0,4);
  const ethLast = walletAddress.substring(38,42);
  const fullAddress = `${ethFirst}...${ethLast}`;
  document.getElementById('connect').innerHTML = fullAddress;
  start();
}


async function getTotalSupply() {
    const options = {
      chain: "matic",
      address: "0xf034ADa7450C426E2cCaEF995d7aA226a45f7B80",
      function_name: "totalSupply",
      abi: ABI,
    };
  
    const totalSupply = await Moralis.Web3API.native.runContractFunction(options);
    document.getElementById('totalSupply').innerHTML = `Minted: ${totalSupply}/500`;
  }


  async function mint() {
    const leafNodes = whitelistAddresses.map(addr => addr);
    const merkleTree = new MerkleTree(leafNodes, keccak256, { sortPairs: true});
    var found = addresses.lastIndexOf(walletAddress);
    if(found < 0) {
      document.getElementById('amounttext').innerHTML = `You are not on the minting list. Maybe next time!`;
      $('#amounttext').addClass('text-danger');
      document.getElementById("amounttext").style.visibility = "visible";
      return
    }
    var claimingAddress = leafNodes[found];
    const hexProof = merkleTree.getHexProof(claimingAddress);

      const options = {
          contractAddress: "0xf034ADa7450C426E2cCaEF995d7aA226a45f7B80",
          functionName: "freeMintPhase",
          abi: ABI,
          params: {
            _to: walletAddress,
            index: found.toString(),
            proof: hexProof
          },
        };
      
        const receipt = await Moralis.executeFunction(options);
        console.log(receipt);
        await start();
    
  }


async function main() {
    const isWeb3Active = Moralis.ensureWeb3IsInstalled()
    if (!isWeb3Active) {
      $("#subscribeModal").modal('toggle');
      return
    }
    
  
    if(document.getElementById('main').innerHTML === "MINT") {
      await mint();
      await getTotalSupply();  
    }
  }




async function start() {
  getTotalSupply();
  var found = addresses.lastIndexOf(walletAddress);
  if(found < 0) {
    document.getElementById('amounttext').innerHTML = `You are not on the free mint whitelist`;
    $('#amounttext').addClass('text-danger');
    document.getElementById("amounttext").style.visibility = "visible";
    return
  }
  var amountt = amount[found];
  const options1 = {
    chain: "matic",
    address: "0xf034ADa7450C426E2cCaEF995d7aA226a45f7B80",
    function_name: "checkClaimed",
    abi: ABI,
    params: {
      index: found.toString()
    }
  };

  const claimed = await Moralis.Web3API.native.runContractFunction(options1);
  if(claimed === true) {
    document.getElementById('amounttext').innerHTML = `You are not on the free mint whitelist`;
    $('#amounttext').addClass('text-danger');
    document.getElementById("amounttext").style.visibility = "visible";
    document.getElementById('main').innerHTML = "already claimed";
    return
  }
  document.getElementById('amounttext').innerHTML = `You can mint ${amountt}`;
  document.getElementById("amounttext").style.visibility = "visible";
  document.getElementById('main').innerHTML = "MINT";
}




document.getElementById("main").onclick = main;
document.getElementById("btn-login-metamask").onclick = loginWeb3;
document.getElementById("btn-login-coinbase").onclick = loginWeb3;
document.getElementById("btn-login-trustwallet").onclick = loginWeb3;
document.getElementById("btn-login-walletconnect").onclick = loginWalletConnect;