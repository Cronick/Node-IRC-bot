var isChannel = require('../modules/is-channel.js');

module.exports = function(client, from, to, text, message) {

  var sendTo = from;
  if (isChannel(to)) {
    sendTo = to;
  }
    client.action(sendTo,'- Mad/Drikke: !cola, !cookie, !fanta, !is, !pizza, !whisky');
    client.action(sendTo,'- Øvrige: !bitcoin, !coinflip, !dice, !htop, !isup, !oskar, !xkcd');
};
