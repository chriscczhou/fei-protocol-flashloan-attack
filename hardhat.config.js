require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      forking: {
        // Replace with your actual API URL
        url: "https://eth-mainnet.g.alchemy.com/v2/gAtOehxU07LnyRv1Yxjuu-kneN4zjwJW",
      },
    },
  },

  solidity: "0.6.8",
};
