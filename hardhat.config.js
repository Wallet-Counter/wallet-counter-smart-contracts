require("@nomiclabs/hardhat-waffle");
require("dotenv").config();
require('solidity-coverage');

module.exports = {
  solidity: {
    version: "0.8.12"
  },
  defaultNetwork: "hardhat",
  networks: {
    matic: {
      url: process.env.MUMBAI_TESTNET_RPC_URL,
      accounts: [`0x${process.env.PRIVATE_KEY}`, `0x${process.env.PRIVATE_KEY_ACCOUNT_2}`],
      chainId: 80001
    }
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
};
