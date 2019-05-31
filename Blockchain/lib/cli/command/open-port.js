const node = require('../../node');
const logger = require('../util/logger.js');

module.exports = function (vorpal) {
  vorpal
    .command('open <port>', 'Open port to accept incoming connections. Eg: open 2727')
    .alias('o')
    .action(function(args, callback) {
      if (args.port) {
        if(typeof args.port === 'number') {
          node.startServer(args.port);
        } else {
          logger.log(`❌  invalid port!`)
        }
      }
      callback();
    })
}