// Import Web3.js library
const Web3 = require('web3');

// Initialize Web3 provider (use MetaMask provider if available)
let web3;
if (typeof window !== 'undefined' && typeof window.ethereum !== 'undefined') {
    // Use MetaMask provider
    web3 = new Web3(window.ethereum);
    // Request account access if needed
    window.ethereum.enable().catch(error => {
        console.error('User denied account access:', error);
    });
} else {
    // Fallback to local provider (e.g., Ganache)
    web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
}

// Define the address and ABI of the deployed smart contract
const contractAddress = '0x123abc...'; // Replace with your contract address
const contractABI = [
    // Your contract ABI here
];

// Create a contract instance
const contract = new web3.eth.Contract(contractABI, contractAddress);

// Example function to interact with the smart contract
async function callContractFunction() {
    try {
        // Call a function on your smart contract
        const result = await contract.methods.someFunction().call();
        console.log('Result from smart contract:', result);
    } catch (error) {
        console.error('Error calling smart contract function:', error);
    }
}

// Example function to send a transaction to the smart contract
async function sendTransaction() {
    try {
        // Send a transaction to your smart contract
        const accounts = await web3.eth.getAccounts();
        const result = await contract.methods.someFunction().send({ from: accounts[0] });
        console.log('Transaction successful! Transaction hash:', result.transactionHash);
    } catch (error) {
        console.error('Error sending transaction to smart contract:', error);
    }
}

// Export the functions if needed
module.exports = {
    callContractFunction,
    sendTransaction
};

