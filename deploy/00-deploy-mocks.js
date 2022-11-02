const { network } = require("hardhat");
const { developmentChains } = require("../helper-hardhat-config");

const DECIMALS = "8";
const INITIAL_ANSWER = "200000000000";
module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();
  if (developmentChains.includes(network.name)) {
    log("Deploying Mocks...");
    const mockPriceFeed = await deploy("MockV3Aggregator", {
      constract: "MockV3Aggregator",
      from: deployer,
      log: true,
      args: [8, 100000000000],
    });
    log(`MockPriceFeed deployed to ${mockPriceFeed.address}`);
  }
};

module.exports.tags = ["all", "mocks"];
