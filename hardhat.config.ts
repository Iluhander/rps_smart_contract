import "@nomicfoundation/hardhat-toolbox";
require("dotenv").config();

const config = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: `https://eth-goerli.g.alchemy.com/v2/${process.env.ALCHEMY_KEY}`,
      accounts: [`0x${process.env.PRIVATE_KEY}`]
    }
  }
};

export default config;