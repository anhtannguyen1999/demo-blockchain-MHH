const theBlockchain = require('../../blockchain');
const inBlockchain = require('../util/table.js');

module.exports = function (vorpal) {
  vorpal
    .command('blockchain', 'See the current state of the blockchain.')
    .alias('bc')
    .action(function(args, callback) {
      inBlockchain(theBlockchain.blockchain)
      callback();
    })
}