async function setValue() {
    const newValue = document.getElementById('newValue').value;
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    const account = accounts[0];

    const contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);
    await contract.methods.set(newValue).send({ from: account });

    alert("Value set successfully!");
}

async function getValue() {
    const contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);
    const currentValue = await contract.methods.get().call();

    document.getElementById('currentValue').innerText = "Current Value: " + currentValue;
}

