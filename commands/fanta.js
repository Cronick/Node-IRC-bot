var isChannel = require('../modules/is-channel.js');

module.exports = function(client, from, to, text, message) {

  var args = text.split(" ");
  var sendTo = from;
  if (isChannel(to)) {
    sendTo = to;
  }

  if (typeof args[1] !== 'undefined' && args[1].trim() !== ''){
    client.action(sendTo,'giver '+args[1]+' en iskold Fanta.');
  } else {
    client.action(sendTo,'giver '+from+' en iskold Fanta.');
  }
};
