const ethers = Moralis.web3Library

const rawAddresses = ['0xa092379F6e928eDB1AaA61A71F17Bb03Ff8557fA', '0x1D9783850B8FBEe37d04EFB81FD5281972A0232E', '0xdfFcA361f44Dfe657dcE4e3f2Bb40522EB94Ac26', '0x783638d8668d1eb267b76e3bc3f118438919e4b5', '0x7BdC8Ef8523237cc2C2c607A3Fd2bd646df6b8bF', '0x99AcCb02A3dC2802E8535b5cD8Be98D3eaad2988', '0x28557F28711948D46f5336181ca96ff8f304E186', '0x756E44C7e2aA31dA0F4ED2077A820FC2Cf6b467b', '0x933e564c6AF5F6fC4EBBC6e6C14b0d1843031C1c', '0x22cBfe6682805cFcE6a8f1FC6Fd118075f5FE955', '0x990bAE5a5CF4c520C7E03F19D6B80f4DD5753D87', '0x8164ee3ddba66452d06fc4cebdbabba33dba30ff', '0x912F35C200256898c5D58fe7cC47BF676bDA32E5', '0x6314170caC9eB9Ce86867662afC0441cB9F6F8A9', '0x0835Efb484d56ae270259404D5A7BB04699091BE', '0x3E0E81F7BB57D4a4a5c8164e316BC3EC51D302c1', '0xd05a5BB1eB334810B41caAFd4A0Ee0E3A96702B1', '0xf7272dD1571ceec0Ee02f3AF07e19327e519282e', '0xb0d2335d31bbf56a2d9ce37d7ad52a10f3c5259d', '0x555d638D9cd77356431Dba5f0615CeefC963AbD1', '0xe7047c82fa19025b092ed68ec1aa12ee6bcf2bd4', '0x1AED3799De8416Fc7B53E75c132B4f67e5Da20B3', '0xd5E1DB05c2273431891f1a30319320379873C79c', '0x10650d2d6FD03093E211F0AEa720fa0924956A19', '0x5e969a5b2d365374a352505b39a45f0e1a1a1f81', '0x330619F0A8779373a209CD5771e38C7186EED83f', '0xD26c8B86E130B184E4bfbBef72aDb7eaAB8b96dc', '0x89fccC453b848f443f1d74bC4ebb1E6500a923aa', '0xD0b4bdE2AE696330692ba4bEb1ac652775415225', '0xDC706A6c1466bEf76E727b3e30349e51d23Bf79b', '0x05bE68a81C65322370F9c20683b9Bb2d1794EF3c', '0xC11b74715204cE8C6ECbc601A91f519ad676396f', '0x4692a6EE1D6Bc077Ba51D27EE953278520bFE754', '0x21C017A2676e7A6699547082E67635def520395e', '0x6F99000a192e4Eb15728608012627CED3233A76c', '0x59c52755b6686a25F09ad0533467bA09Ed50Dd69', '0x6AbAD973e0ab689427d38F7E59Fb2f0333799040', '0xD8d3387A00f78bdb39297d5cd4eC05940b51dC1c', '0x9756Df438c5Dad341E4C8cFeBcDF05A67aa0C557', '0x0651addc4572FfE415ebB5AC7693Dc1764f9b3Ff', '0xd2dA14a010C0f8906b27f9b81497B6faa5175dE2', '0xEa0C1fE02340450823b3Df10DfD2b692A7b82E42', '0xdce67033Ce64b923a00FAedBD897736FAA3F4930', '0xd09C2c3C1A25A9D682C23F0241611E7B57E7e146', '0x3c62950886f5f9Ea804b72AC3c0B17Cfd1f8b15a', '0x48a7Af34713C5A0C66b72626CD655C9cD64C9E59', '0x148BF720FfeEef61dE5F77994B8cd3b81b2970Da', '0xc2a60BEd1E4E6022A2dC415650C1Eee6eAfa25B5', '0xa27F2d040a6032fa31c77A34139C3f5b401f4123', '0xa1386E2B88bffA457dDF1B1E992ff8E30F09E606', '0x4B99F9f927D444f67b8901c15D255AC055d15C69', '0xA2dA5e3743EA02Ed10e6A10620c16374EEb1EF48', '0xb88B6C6a030bC11D5c680756826F446524571D54', '0xf9aBd5682e614bBFB3a7aD84561fb38C09956B0D', '0x310c417a43C9dFB931B63116Df5a03DDa6fB3E19', '0xb1257bE0Fdda636B10F2F7956700d6B829346C89', '0x901229a8111f5D9b582c6E2959D3Ad9231f55D10', '0x5512cdbe3657d4b5a3a31e55db9a59ca5ee7d4d6', '0x6C21a1c0Bd64FBF5947fdbc4B8044a6298Cbd7B5', '0x10620ca8610B042c018bf1011c92450CE4548f07', '0x42188149C8bdb07258B61349c286D6C8DeC84EA6', '0xBaa5ABc79c663D55c62f8e85EA99F787648CC3B4', '0x06b745CB7564E6c7B1eaB76aa017000229f1fF7c', '0x481fE4b0A413ddaC0e0e19f1a7C416fe28AF670e', '0xa8ad3C8D9039a0D10040d187C44336e57456fecE', '0x3A427DdE4C99d62dfabC116761388C00a7a78d91', '0xDF09Df51389A7D4E5b1873a5b7429C7476b240E3', '0xCC12D13C28131ee70b570eEE0320c584DD302b6e', '0xb87471A5ff7C491AB26f2529353A84Ff5E309a10', '0xcee7F267ba9b2D32a1304588da5699DB50e0bdF3', '0x93D389958f404931bb431Ce5503Ac9D5D98811e4', '0x38f3ED20f2EF8AEC238eFA54B6354f70D4dCCEE8', '0x2302Cd910a3d05dc7065abfeA451CF4dd8c1Df2E', '0x20e57Df2475AaAa86FAD6e86D0Ed73860A19e5e3', '0x8EFa29B699F3F6d061b32744D3767ef3a325083b', '0xbFf2AAB010ef1B21Fa2FE60B98679770308010c5', '0x93A984520a497A442C8641c6BB4F327eE56Ffdb9', '0xbE620ed572C97c9505A739021B20500548fFB90E', '0xFC3EfA70a2F60188a8caA490D9be981f111a2392', '0xd84b84d0E7504E68283C0EF5F83244bDc5544699', '0x6a39995e549aA41e84E82d5f03a8A9D6f5BfBe4a', '0xEC29cF27903811E76394037039c3ca73e4cf0268', '0x7a3D281ae34174137D75390C879F839D3803A719', '0xaF4374867212F3b58329d1134DBe14703b930305', '0xa1143b7a3141c103c3171F9346d6547078E078f4', '0xaF4374867212F3b58329d1134DBe14703b930305', '0xABc5AA5c8c24E2835B6a80220558AB2466E03611', '0xA3763b3D6FAf68dAEDFf44573BbEFe5FB1150d76', '0x1E0FB3fc50Ffc9eCd67B9578Fc0b667a77e78E32', '0x83236918ff3bbe5cd4513e90c73e9c6a4fa658a9']

export var addresses = [];
for (let i = 0; i < rawAddresses.length; i++) {
  addresses.push(ethers.utils.getAddress(rawAddresses[i]))
}

 export let whitelistAddresses = [
    ethers.utils.solidityKeccak256(['uint256', 'address'], [0, ethers.utils.getAddress(addresses[0])]),
    ethers.utils.solidityKeccak256(['uint256', 'address'], [1, ethers.utils.getAddress(addresses[1])]),
    ethers.utils.solidityKeccak256(['uint256', 'address'], [2, ethers.utils.getAddress(addresses[2])]),
    ethers.utils.solidityKeccak256(['uint256', 'address'], [3, ethers.utils.getAddress(addresses[3])]),
    ethers.utils.solidityKeccak256(['uint256', 'address'], [4, ethers.utils.getAddress(addresses[4])]),
    ethers.utils.solidityKeccak256(['uint256', 'address'], [5, ethers.utils.getAddress(addresses[5])]),
    ethers.utils.solidityKeccak256(['uint256', 'address'], [6, ethers.utils.getAddress(addresses[6])]),
    ethers.utils.solidityKeccak256(['uint256', 'address'], [7, ethers.utils.getAddress(addresses[7])]),
    ethers.utils.solidityKeccak256(['uint256', 'address'], [8, ethers.utils.getAddress(addresses[8])]),
    ethers.utils.solidityKeccak256(['uint256', 'address'], [9, ethers.utils.getAddress(addresses[9])]),
    ethers.utils.solidityKeccak256(['uint256', 'address'], [10, ethers.utils.getAddress(addresses[10])]),
    ethers.utils.solidityKeccak256(['uint256', 'address'], [11, ethers.utils.getAddress(addresses[11])]),
    ethers.utils.solidityKeccak256(['uint256', 'address'], [12, ethers.utils.getAddress(addresses[12])]),
    ethers.utils.solidityKeccak256(['uint256', 'address'], [13, ethers.utils.getAddress(addresses[13])]),
    ethers.utils.solidityKeccak256(['uint256', 'address'], [14, ethers.utils.getAddress(addresses[14])]),
    ethers.utils.solidityKeccak256(['uint256', 'address'], [15, ethers.utils.getAddress(addresses[15])]),
    ethers.utils.solidityKeccak256(['uint256', 'address'], [16, ethers.utils.getAddress(addresses[16])]),
    ethers.utils.solidityKeccak256(['uint256', 'address'], [17, ethers.utils.getAddress(addresses[17])]),
    ethers.utils.solidityKeccak256(['uint256', 'address'], [18, ethers.utils.getAddress(addresses[18])]),
    ethers.utils.solidityKeccak256(['uint256', 'address'], [19, ethers.utils.getAddress(addresses[19])]),
    ethers.utils.solidityKeccak256(['uint256', 'address'], [20, ethers.utils.getAddress(addresses[20])]),
    ethers.utils.solidityKeccak256(['uint256', 'address'], [21, ethers.utils.getAddress(addresses[21])]),
    ethers.utils.solidityKeccak256(['uint256', 'address'], [22, ethers.utils.getAddress(addresses[22])]),
    ethers.utils.solidityKeccak256(['uint256', 'address'], [23, ethers.utils.getAddress(addresses[23])]),
    ethers.utils.solidityKeccak256(['uint256', 'address'], [24, ethers.utils.getAddress(addresses[24])]),
    ethers.utils.solidityKeccak256(['uint256', 'address'], [25, ethers.utils.getAddress(addresses[25])]),
    ethers.utils.solidityKeccak256(['uint256', 'address'], [26, ethers.utils.getAddress(addresses[26])]),
    ethers.utils.solidityKeccak256(['uint256', 'address'], [27, ethers.utils.getAddress(addresses[27])]),
    ethers.utils.solidityKeccak256(['uint256', 'address'], [28, ethers.utils.getAddress(addresses[28])]),
    ethers.utils.solidityKeccak256(['uint256', 'address'], [29, ethers.utils.getAddress(addresses[29])]),
    ethers.utils.solidityKeccak256(['uint256', 'address'], [30, ethers.utils.getAddress(addresses[30])]),
    ethers.utils.solidityKeccak256(['uint256', 'address'], [31, ethers.utils.getAddress(addresses[31])]),
    ethers.utils.solidityKeccak256(['uint256', 'address'], [32, ethers.utils.getAddress(addresses[32])]),
    ethers.utils.solidityKeccak256(['uint256', 'address'], [33, ethers.utils.getAddress(addresses[33])]),
    ethers.utils.solidityKeccak256(['uint256', 'address'], [34, ethers.utils.getAddress(addresses[34])]),
    ethers.utils.solidityKeccak256(['uint256', 'address'], [35, ethers.utils.getAddress(addresses[35])]),
    ethers.utils.solidityKeccak256(['uint256', 'address'], [36, ethers.utils.getAddress(addresses[36])]),
    ethers.utils.solidityKeccak256(['uint256', 'address'], [37, ethers.utils.getAddress(addresses[37])]),
    ethers.utils.solidityKeccak256(['uint256', 'address'], [38, ethers.utils.getAddress(addresses[38])]),
    ethers.utils.solidityKeccak256(['uint256', 'address'], [39, ethers.utils.getAddress(addresses[39])]),
    ethers.utils.solidityKeccak256(['uint256', 'address'], [40, ethers.utils.getAddress(addresses[40])]),
    ethers.utils.solidityKeccak256(['uint256', 'address'], [41, ethers.utils.getAddress(addresses[41])]),
    ethers.utils.solidityKeccak256(['uint256', 'address'], [42, ethers.utils.getAddress(addresses[42])]),
    ethers.utils.solidityKeccak256(['uint256', 'address'], [43, ethers.utils.getAddress(addresses[43])]),
    ethers.utils.solidityKeccak256(['uint256', 'address'], [44, ethers.utils.getAddress(addresses[44])]),
    ethers.utils.solidityKeccak256(['uint256', 'address'], [45, ethers.utils.getAddress(addresses[45])]),
    ethers.utils.solidityKeccak256(['uint256', 'address'], [46, ethers.utils.getAddress(addresses[46])]),
    ethers.utils.solidityKeccak256(['uint256', 'address'], [47, ethers.utils.getAddress(addresses[47])]),
    ethers.utils.solidityKeccak256(['uint256', 'address'], [48, ethers.utils.getAddress(addresses[48])]),
    ethers.utils.solidityKeccak256(['uint256', 'address'], [49, ethers.utils.getAddress(addresses[49])]),
    ethers.utils.solidityKeccak256(['uint256', 'address'], [50, ethers.utils.getAddress(addresses[50])]),
    ethers.utils.solidityKeccak256(['uint256', 'address'], [51, ethers.utils.getAddress(addresses[51])]),
    ethers.utils.solidityKeccak256(['uint256', 'address'], [52, ethers.utils.getAddress(addresses[52])]),
    ethers.utils.solidityKeccak256(['uint256', 'address'], [53, ethers.utils.getAddress(addresses[53])]),
    ethers.utils.solidityKeccak256(['uint256', 'address'], [54, ethers.utils.getAddress(addresses[54])]),
    ethers.utils.solidityKeccak256(['uint256', 'address'], [55, ethers.utils.getAddress(addresses[55])]),
    ethers.utils.solidityKeccak256(['uint256', 'address'], [56, ethers.utils.getAddress(addresses[56])]),
    ethers.utils.solidityKeccak256(['uint256', 'address'], [57, ethers.utils.getAddress(addresses[57])]),
    ethers.utils.solidityKeccak256(['uint256', 'address'], [58, ethers.utils.getAddress(addresses[58])]),
    ethers.utils.solidityKeccak256(['uint256', 'address'], [59, ethers.utils.getAddress(addresses[59])]),
    ethers.utils.solidityKeccak256(['uint256', 'address'], [60, ethers.utils.getAddress(addresses[60])]),
    ethers.utils.solidityKeccak256(['uint256', 'address'], [61, ethers.utils.getAddress(addresses[61])]),
    ethers.utils.solidityKeccak256(['uint256', 'address'], [62, ethers.utils.getAddress(addresses[62])]),
    ethers.utils.solidityKeccak256(['uint256', 'address'], [63, ethers.utils.getAddress(addresses[63])]),
    ethers.utils.solidityKeccak256(['uint256', 'address'], [64, ethers.utils.getAddress(addresses[64])]),
    ethers.utils.solidityKeccak256(['uint256', 'address'], [65, ethers.utils.getAddress(addresses[65])]),
    ethers.utils.solidityKeccak256(['uint256', 'address'], [66, ethers.utils.getAddress(addresses[66])]),
    ethers.utils.solidityKeccak256(['uint256', 'address'], [67, ethers.utils.getAddress(addresses[67])]),
    ethers.utils.solidityKeccak256(['uint256', 'address'], [68, ethers.utils.getAddress(addresses[68])]),
    ethers.utils.solidityKeccak256(['uint256', 'address'], [69, ethers.utils.getAddress(addresses[69])]),
    ethers.utils.solidityKeccak256(['uint256', 'address'], [70, ethers.utils.getAddress(addresses[70])]),
    ethers.utils.solidityKeccak256(['uint256', 'address'], [71, ethers.utils.getAddress(addresses[71])]),
    ethers.utils.solidityKeccak256(['uint256', 'address'], [72, ethers.utils.getAddress(addresses[72])]),
    ethers.utils.solidityKeccak256(['uint256', 'address'], [73, ethers.utils.getAddress(addresses[73])]),
    ethers.utils.solidityKeccak256(['uint256', 'address'], [74, ethers.utils.getAddress(addresses[74])]),
    ethers.utils.solidityKeccak256(['uint256', 'address'], [75, ethers.utils.getAddress(addresses[75])]),
    ethers.utils.solidityKeccak256(['uint256', 'address'], [76, ethers.utils.getAddress(addresses[76])]),
    ethers.utils.solidityKeccak256(['uint256', 'address'], [77, ethers.utils.getAddress(addresses[77])]),
    ethers.utils.solidityKeccak256(['uint256', 'address'], [78, ethers.utils.getAddress(addresses[78])]),
    ethers.utils.solidityKeccak256(['uint256', 'address'], [79, ethers.utils.getAddress(addresses[79])]),
    ethers.utils.solidityKeccak256(['uint256', 'address'], [80, ethers.utils.getAddress(addresses[80])]),
    ethers.utils.solidityKeccak256(['uint256', 'address'], [81, ethers.utils.getAddress(addresses[81])]),
    ethers.utils.solidityKeccak256(['uint256', 'address'], [82, ethers.utils.getAddress(addresses[82])]),
    ethers.utils.solidityKeccak256(['uint256', 'address'], [83, ethers.utils.getAddress(addresses[83])]),
    ethers.utils.solidityKeccak256(['uint256', 'address'], [84, ethers.utils.getAddress(addresses[84])]),
    ethers.utils.solidityKeccak256(['uint256', 'address'], [85, ethers.utils.getAddress(addresses[85])]),
    ethers.utils.solidityKeccak256(['uint256', 'address'], [86, ethers.utils.getAddress(addresses[86])]),
    ethers.utils.solidityKeccak256(['uint256', 'address'], [87, ethers.utils.getAddress(addresses[87])]),
    ethers.utils.solidityKeccak256(['uint256', 'address'], [88, ethers.utils.getAddress(addresses[88])]),
    ethers.utils.solidityKeccak256(['uint256', 'address'], [89, ethers.utils.getAddress(addresses[89])]),
    
    
  ];
