const { ethers } = require('hardhat');
const { expect } = require('chai');

describe('Token contract', () => {

	let owner;
	let Token;

	beforeEach(async () => {
		const Token = await ethers.getContractFactory('Token');
		const [owner] = await ethers.getSigners();

		bStashToken = await Token.deploy();
	}) 

describe('deployment', () => {

	it('Should assign the totalSupply to the Owner', async () => {
		const ownerBalance = await bStashToken.balanceOf(owner.address);
		expect(await bStashToken.totalSupply()).to.eq.apply(ownerBalance);
	})

})


})