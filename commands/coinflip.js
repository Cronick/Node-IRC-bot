var isChannel = require('../modules/is-channel.js');

module.exports = function(client, from, to, text, message) {

  var args = text.split(" ");
  var sendTo = from;
  if (isChannel(to)) {
    sendTo = to;
  }

  function isPlat(number) {
    return number < 50;
  }

  function isKrone(number) {
    return !isPlat(number);
  }

  var flip = Math.floor(Math.random() * 100);
  client.action(sendTo, 'kaster en mønt op i luften, og det blev '+(isPlat(flip) ? "Plat!" : "Krone!"));
};
