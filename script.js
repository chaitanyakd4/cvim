const contractAddress = '0x5fcDA1eB0fe56f67ff2241E3Fd7f0A7c952D4713'; // Replace with your contract address
const contractABI = [
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "newValue",
                "type": "uint256"
            }
        ],
        "name": "setValue",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "newValue",
                "type": "uint256"
            }
        ],
        "name": "ValueChanged",
        "type": "event"
    },
    {
        "inputs": [],
        "name": "getValue",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
];

// Create web3 instance
let web3;

if (typeof window.ethereum !== 'undefined') {
    web3 = new Web3(window.ethereum);
} else {
    console.error('Web3 provider not found');
}

// Create contract instance
const contractInstance = new web3.eth.Contract(contractABI, contractAddress);

// Example: Call a read-only function
contractInstance.methods.getValue().call()
    .then(value => {
        console.log('Current value:', value);
    })
    .catch(error => {
        console.error('Error:', error);
    });

// Example: Call a state-changing function (requires MetaMask confirmation)
const newValue = 42; // Example new value
web3.eth.requestAccounts()
    .then(accounts => {
        return contractInstance.methods.setValue(newValue).send({ from: accounts[0] });
    })
    .then(receipt => {
        console.log('Transaction receipt:', receipt);
    })
    .catch(error => {
        console.error('Error:', error);
    });
