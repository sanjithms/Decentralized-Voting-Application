/**
* @type import('hardhat/config').HardhatUserConfig
*/

require('dotenv').config();
require("@nomiclabs/hardhat-ethers");

const { API_URL, PRIVATE_KEY } = process.env;

module.exports = {
   solidity: "0.8.11",
   defaultNetwork: "sepolia", // Set default network
   networks: {
      hardhat: {},
      sepolia: {
         url: API_URL, // Ensure this is correctly pointing to the Sepolia RPC URL
         accounts: [`0x${PRIVATE_KEY}`],
         gas: 2100000, // Consider using a reasonable gas limit, adjust if needed
         gasPrice: 8000000000, // Gas price in wei (10 Gwei); adjust based on network conditions
      }
   },
}
