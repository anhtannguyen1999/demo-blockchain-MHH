const node = require('../../node');

module.exports = function (vorpal) {
  vorpal
    .command('connect <host> <port>', "Connect with a peer. VD: connect localhost 2727")
    .alias('c')
    .action(function(args, callback) {
      if(args.host && args.port) {
        node.connectToPeer(args.host, args.port);
      }
      callback();
    })
}