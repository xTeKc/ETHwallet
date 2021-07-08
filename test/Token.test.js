const { ethers } = require('hardhat');
const { expect } = require('chai');

describe('Token contract', () => {
	it('Should show the token Name & Symbol', async () => {
		const [owner] = await ethers.getSigners();
		const Token = await ethers.getContractFactory('Token');
		const token = await Token.deploy('Token Deployed!!');
		const ownerBalance = await bStash.balanceOf(owner.address);

		expect(await bStash.totalSupply()).to.eq(ownerBalance);
		expect(await token.NameAndSymbol().to.equal('bStash', 'BSTH'));
		
	})



})