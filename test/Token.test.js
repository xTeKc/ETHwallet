const { expect } = require('chai');

describe('Token contract', () => {
	it('Should show the token Name & Symbol', async () => {
		const Token = await ethers.getContractFactory('Token');
		const token = await Token.deploy('Token Deployed!!');

		expect(await token.NameAndSymbol().to.equal('bStash', 'BSTH'));
		
	})
})