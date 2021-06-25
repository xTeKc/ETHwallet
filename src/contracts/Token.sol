pragma solidity 0.8.0;

import 'hardhat/console.sol';

contract Token {
    string public name = 'bStash';
    string public symbol = 'BSTH';
    uint256 public decimals = 18;
    uint256 public totalSupply;

mapping(address => uint256) public balanceOf;

constructor() {
    totalSupply = 100000 * (10 ** decimals);
    balanceOf[msg.sender] = totalSupply;
    owner = msg.sender;
}

}