pragma solidity 0.8.0;

import 'hardhat/console.sol';

contract Gash {
    string public name = Gash;
    string public symbol = GSH;
    uint256 public decimals = 18;
    uint256 public totalSupply;

constructor() {
    totalSupply = 100000 * (10 ** decimals);
    balanceOf[msg.sender] = totalSupply;
    msg.sender == owner;
}

}