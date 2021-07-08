const { ethers } = require('hardhat');
const { expect } = require('chai');

describe('Token contract', () => {
	beforeEach(async () => {
		const Token = await ethers.getContractFactory('Token');
		const [owner] = await ethers.getSigners();
	}) 

	it('Should show the token Name & Symbol', async () => {
		const token = await Token.deploy('Token Deployed!!');
		const ownerBalance = await bStash.balanceOf(owner.address);

		expect(await bStash.totalSupply()).to.eq(ownerBalance);
		expect(await token.NameAndSymbol().to.equal('bStash', 'BSTH'));
		
	})



})