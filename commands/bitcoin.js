var isChannel = require('../modules/is-channel.js');
var request = require('request-json');

module.exports = function(client, from, to, text, message) {

  var url = request.createClient('https://blockchain.info/');

  var sendTo = from;
  if (isChannel(to)) {
    sendTo = to;
  }

  url.get('ticker', function(err, res, body) {
    return client.say(sendTo, 'USD: $'+body.USD.buy+' - DKK: '+body.DKK.buy+' kr');
  });
};
