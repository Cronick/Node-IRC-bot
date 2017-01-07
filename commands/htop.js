var isChannel = require('../modules/is-channel.js');
var cool = require('cool-ascii-faces');

module.exports = function(client, from, to, text, message) {

  var args = text.split(" ");
  var sendTo = from;
  if (isChannel(to)) {
    sendTo = to;
  }

  client.action(sendTo, cool());
};
