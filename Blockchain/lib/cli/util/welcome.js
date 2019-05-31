const logger = require('./logger.js');
const vorpal = require('vorpal')();

module.exports = function (vorpal) {
  logger.log("👋  Chao mung den voi he thong blockchain!");
  vorpal.exec("help")
}