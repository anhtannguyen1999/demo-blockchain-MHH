const { SHA256 } = require('crypto-js');
const logger = require('../../cli/util/logger.js');
const spinner = require('../../cli/util/spinner.js');

module.exports = class Block {
  //Khởi tạo block đầu tiên
  static get genesis () {
    return new Block(
      0,
      '0',
      1557966619,
      'Tan co 100 nghin',
      '0000018035a828da0878ae92ab6fbb16be1ca87a02a3feaa9e3c2b6871931046',
      56551
    )
  }

  //Hàm khởi tạo
  constructor (
    index = 0,
    previousHash = '0',
    timestamp = new Date().getTime() / 1000,
    data = 'none',
    hash = '',
    nonce = 0
  ) {
    this.index = index
    this.previousHash = previousHash.toString()
    this.timestamp = timestamp
    this.data = data
    this.hash = hash.toString()
    this.nonce = nonce
  }
}