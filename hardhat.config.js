/**
* @type import('hardhat/config').HardhatUserConfig
*/
require("@nomiclabs/hardhat-ethers");
require('dotenv').config();
 
const { 
         API_URL="https://ancient-chaotic-tab.ethereum-goerli.discover.quiknode.pro/a2e46ae0af2097d57138cccb579ae2eb83631a7a/" ,
         PRIVATE_KEY="53a0e78c7fd901f1dd54b18adf96fb5206aa4559818f885b5a3fec0a4479c317" 
      } = process.env;
 
module.exports = {
   solidity: "0.8.17",
   defaultNetwork: "goerli",
   networks: {
      hardhat: {},
      goerli: {
         url: API_URL,
         accounts: [`0x${PRIVATE_KEY}`]
      }
   },
};
