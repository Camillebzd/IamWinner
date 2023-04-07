# IamWinner

## Introduction

This little repo is the week 4 project of the ethereum bootcamp of Alchemy.

The Goal is simple, emit the winner event on this smart contract on the Goerli testnet [here](https://goerli.etherscan.io/address/0xcF469d3BEB3Fc24cEe979eFf83BE33ed50988502#code).

### Getting Setup

```console
$ npm install
```

### Test

If you want to run the test:

```console
$ npx hardhat test
```

### Deploy and trigger

Before deploying, remember to create a .env and add your private key and alchemy info then:
```console
$ npx hardhat run scripts/deploy.js --network goerli
```

After the deployement get the address and past it in the "scripts/trigger.js" l.19 then:
```console
$ npx hardhat run scripts/trigger.js --network goerli
```

If you succeed, you will view your transaction hash [here](https://goerli.etherscan.io/address/0xcF469d3BEB3Fc24cEe979eFf83BE33ed50988502#events).