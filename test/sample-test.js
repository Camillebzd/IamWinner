const { expect, assert } = require("chai");

describe("TestTrigger", function () {
    let triggeredContract;
    let triggerContract;

    beforeEach(async function () {
        // deploye triggeredContract
        let triggeredContractFactory = await hre.ethers.getContractFactory(
            "ContractTest"
        );
        triggeredContract = await triggeredContractFactory.deploy();
        await triggeredContract.deployed();
        // deploye triggerContract
        let triggerContractFactory = await hre.ethers.getContractFactory(
            "TriggerWinner"
        );
        triggerContract = await triggerContractFactory.deploy(triggeredContract.address);
        await triggerContract.deployed();
    });

    it("should fire an event and log something", async function () {
        await expect(triggerContract.trigger()).to.emit(triggeredContract, "Winner").withArgs(triggerContract.address);
    });
});