const blockchain = require('../../blockchain');
const node = require('../../node');

module.exports = function (vorpal) {
  vorpal
    .command('mine <data>', 'Mine a new block. Eg: mine hello!')
    .alias('m')
    .action(function(args, callback) {
      if (args.data) {
        blockchain.mine(args.data);
        node.broadcastLatest(); 
      }
      callback();
    })
}