const { expect } = require('chai');
const { ethers } = require('ethers');

describe('Token Info', () => {
	it('Should show the token Name & Symbol', async () => {
		const Token = await ethers.getContractFactory('Token');
		const token = await Token.deploy('Token Deployed!!');
		await token.deployed();

		expect(await token.NameAndSymbol().to.equal('bStash', 'BSTH'));
		
	})
})