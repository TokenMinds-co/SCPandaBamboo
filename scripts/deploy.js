const hre = require("hardhat");
const fs = require('fs');

async function main() {
  const BAMBOO = await hre.ethers.getContractFactory("BAMBOOToken");
  const bamboo = await BAMBOO.deploy("0x57a204AA1042f6E66DD7730813f4024114d74f37");
  await bamboo.deployed();
  console.log("bamboo contract deployed to:", bamboo.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
