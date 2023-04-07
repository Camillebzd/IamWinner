require('dotenv').config();
const ethers = require('ethers');

// Get Alchemy API Key
const API_KEY = process.env.API_KEY;

// Define an Alchemy Provider
const provider = new ethers.providers.AlchemyProvider('goerli', API_KEY);

// Get the ABI
const contract = require("../artifacts/contracts/TriggerWinner.sol/TriggerWinner.json");

// Create a signer
const privateKey = process.env.PRIVATE_KEY
const signer = new ethers.Wallet(privateKey, provider)

// Get contract ABI and address
const abi = contract.abi
const contractAddress = '0xF13Da6991cA03F3653Fd2566b9c22846Fee52F25' // change here after your deployement or you'll trigger with my contract ;)

// Create a contract instance
const triggerContract = new ethers.Contract(contractAddress, abi, signer)

// Get the NFT Metadata IPFS URL
const tokenUri = "https://gateway.pinata.cloud/ipfs/QmTBV8txNf2WJDbVpgjwFavmtmx9kQE6mixG5KoztfiMc7"

// Call triggerTheWinner function
const triggerTheWinner = async () => {
    let trgTxn = await triggerContract.trigger()
    await trgTxn.wait()
    console.log(`Triggered! Check it out at: https://goerli.etherscan.io/tx/${trgTxn.hash}`)
}

triggerTheWinner()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });