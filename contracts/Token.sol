pragma solidity 0.8.0;

import 'hardhat/console.sol';

contract Token {
    string public name = 'bStash';
    string public symbol = 'BSTH';
    uint256 public decimals = 18;
    uint256 public totalSupply;

    address public owner;

mapping(address => uint256) public balanceOf;

constructor() {
    totalSupply = 100000 * (10 ** decimals);
    balanceOf[msg.sender] = totalSupply;
    owner = msg.sender;
}

function NameAndSymbol(string memory _name, string memory _symbol) public {
    console.log('Token Name & Symbol');
    name = _name;
    symbol = _symbol;
}

function DecimalsAndTotal(uint256 _decimals, uint256 _totalSupply) public {
    console.log('Token Decimals & TotalSupply');
    decimals = _decimals;
    totalSupply = _totalSupply;
}

}