const node = require('../../node');

module.exports = function (vorpal) {
  vorpal
    .command('discover', 'Discover peers from your connected peers.')
    .alias('d')
    .action(function(args, callback) {
      node.discoverPeers();
      callback();
    })
}