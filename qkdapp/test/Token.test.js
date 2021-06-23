import { ether } from './helpers'

const Token = artifacts.require('./Token')

require('chai')
	.use(require('chai-as-promised'))
	.should()