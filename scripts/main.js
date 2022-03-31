import { whitelistAddresses, addresses } from './merkle.js?ver=2.1.0'
import { ABI } from './abi.js';

 const Web3Modal = window.Web3Modal.default;
 const WalletConnectProvider = window.WalletConnectProvider.default;
 const infuraProvider = new ethers.providers.JsonRpcProvider("https://polygon-mainnet.infura.io/v3/a0ecf0217614452099724b8999730684");
 const mainnetProvider = new ethers.providers.JsonRpcProvider("https://mainnet.infura.io/v3/a0ecf0217614452099724b8999730684");
 const infuraContract = new ethers.Contract("0xf034ADa7450C426E2cCaEF995d7aA226a45f7B80", ABI, infuraProvider)
 var contract;


// login
var walletAddress = "0x";
getTotalSupply();

async function loginWeb3() {
  // console.log("hello")

  const providerOptions = {
    walletconnect: {
      package: WalletConnectProvider,
      options: {
        infuraId: "a0ecf0217614452099724b8999730684",
        rpc: {137: "https://polygon-mainnet.infura.io/v3/a0ecf0217614452099724b8999730684"},
      }
    },

  };

  let web3Modal = new Web3Modal({
    cacheProvider: false, // optional
    providerOptions, // required
    disableInjectedProvider: false, // optional. For MetaMask / Brave / Opera.
  });
  const instance = await web3Modal.connect();
  var provider = new ethers.providers.Web3Provider(instance);
  
  
  const currentChain = await provider.getNetwork()
  if(currentChain.chainId != 137) {
    // console.log("hello")
    await window.ethereum.request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId: '0x89' }], // chainId must be in hexadecimal numbers
    });
    provider = new ethers.providers.Web3Provider(instance);
  }
  const signer = provider.getSigner();
  contract = new ethers.Contract("0xf034ADa7450C426E2cCaEF995d7aA226a45f7B80", ABI, signer)

  walletAddress = await signer.getAddress();
  // var fullAddress;

  // const hasENS = await mainnetProvider.lookupAddress(walletAddress);

  // if(hasENS) {
  //   fullAddress = hasENS
  // } else {
    const ethFirst = walletAddress.substring(0,4);
    const ethLast = walletAddress.substring(38,42);
    const fullAddress = `${ethFirst}...${ethLast}`;
  // }


  
  document.getElementById('connect').innerHTML = fullAddress;
  if(new Date().getTime() >= 1648821600000) {
    start();
  } else(startFree())
}


async function getTotalSupply() {
    const totalSupply = await infuraContract.totalSupply()
    document.getElementById('totalSupply').innerHTML = `Minted: ${totalSupply}/10000`;
  }


  async function mintFree() {
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

        const receipt = await contract.freeMintPhase(walletAddress, found, hexProof);
        console.log(receipt);
        await startFree();
    
  }

  async function mint() {
    var amount = parseInt(document.getElementById('amountNumber').value);
    const singlePrice = await contract.price();
    const totalPrice = amount * singlePrice;

    var overrideOptions = {
      value: totalPrice
    }

    const receipt = await contract.mint(walletAddress, amount, overrideOptions);
    console.log(receipt);
    await start();
  }


async function main() {
    if (!contract) {
      await loginWeb3();
      return
    }
    
  
    if(document.getElementById('main').innerHTML === "MINT") {
      await mint();
      await getTotalSupply();  
    }

    if(document.getElementById('main').innerHTML === "MINT FREE") {
      await mintFree();
    }
  }



async function start() {
  getTotalSupply();
  document.getElementById('amounttext').innerHTML = `Please select the amount you want to mint:`;
  document.getElementById("amount").style.visibility = "visible";
  document.getElementById("cost").style.visibility = "visible";
  document.getElementById("amounttext").style.visibility = "visible";
  document.getElementById('main').innerHTML = "MINT";
}


async function startFree() {
  getTotalSupply();
  var found = addresses.lastIndexOf(walletAddress);
  if(found < 0) {
    document.getElementById('amounttext').innerHTML = `You are not on the free mint whitelist`;
    $('#amounttext').addClass('text-danger');
    document.getElementById("amounttext").style.visibility = "visible";
    return
  }
  const claimed = await contract.checkClaimed(found);

  if(claimed === true) {
    document.getElementById('amounttext').innerHTML = `You are not on the free mint whitelist`;
    $('#amounttext').addClass('text-danger');
    document.getElementById("amounttext").style.visibility = "visible";
    document.getElementById('main').innerHTML = "already claimed";
    return
  }
  document.getElementById('amounttext').innerHTML = `You can mint 2 free TTC NFTs`;
  document.getElementById("amounttext").style.visibility = "visible";
  document.getElementById('main').innerHTML = "MINT FREE";
}




document.getElementById("main").onclick = main;
// document.getElementById("btn-login-metamask").onclick = loginWeb3;
// document.getElementById("btn-login-coinbase").onclick = loginWeb3;
// document.getElementById("btn-login-trustwallet").onclick = loginWeb3;
// document.getElementById("btn-login-walletconnect").onclick = loginWalletConnect;