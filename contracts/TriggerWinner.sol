// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

interface Contract {
   function attempt() external;
}

contract TriggerWinner {
    address public contractAddressToTrigger;

    constructor(address _contractAddressToTrigger) {
        contractAddressToTrigger = _contractAddressToTrigger;
    }

    function trigger() external {
        Contract(contractAddressToTrigger).attempt();
    }
}