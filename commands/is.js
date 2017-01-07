var isChannel = require('../modules/is-channel.js');

module.exports = function(client, from, to, text, message) {

  var args = text.split(" ");
  var sendTo = from;
  if (isChannel(to)) {
    sendTo = to;
  }

  if (typeof args[1] !== 'undefined' && args[1].trim() !== ''){
    client.action(sendTo,'laver en tre-kuglers is til '+args[1]+'.');
  } else {
    client.action(sendTo,'laver en tre-kuglers is til '+from+'.');
  }
};
