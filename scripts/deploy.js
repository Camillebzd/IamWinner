const hre = require("hardhat");

async function main() {
  const TriggerWinner = await hre.ethers.getContractFactory("TriggerWinner");
  const triggerWinner = await TriggerWinner.deploy("0xcF469d3BEB3Fc24cEe979eFf83BE33ed50988502"); // contract address hardcoded from etherscan 

  await triggerWinner.deployed();

  console.log(
    `TriggerWinner deployed to ${triggerWinner.address}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
