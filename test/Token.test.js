const { ethers } = require('hardhat');
const { expect } = require('chai');

describe('Token contract', () => {

	let owner;
	let Token;

	beforeEach(async () => {
		const Token = await ethers.getContractFactory('Token');
		const [owner] = await ethers.getSigners();
	}) 




})