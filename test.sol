// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract TransactionContract {
    address public owner;

    event Transfer(address indexed sender, address indexed recipient, uint amount);

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the contract owner can call this function");
        _;
    }

    receive() external payable {
        // Allow contract to receive Ether
    }

    function sendEther(address payable _recipient, uint _amount) external onlyOwner {
        require(_recipient != address(0), "Invalid recipient address");
        require(_amount > 0 && _amount <= address(this).balance, "Invalid amount or insufficient balance");

        _recipient.transfer(_amount);
        emit Transfer(address(this), _recipient, _amount);
    }

    function getContractBalance() external view returns (uint) {
        return address(this).balance;
    }
}
