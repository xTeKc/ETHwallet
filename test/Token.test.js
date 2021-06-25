const { expect } = require('chai');
const { ethers } = require('hardhat');

describe('Token contract', () => {
	it('Deployed bStash content', async () => {
		const [owner] = await ethers.getSigners();

		const Token = await ethers.getContractFactory('Token');

		const bStash = await Token.deploy();

		const ownerBalance = await bStash.balanceOf(owner.address);
		expect(await bStash.totalSupply()).to.equal(ownerBalance);

	});
});
