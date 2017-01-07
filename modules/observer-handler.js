var fs = require('fs');
var isChannel = require('./is-channel.js');

module.exports = function(client, from, to, text, message) {

  if (text && text.length > 2 && text[0] != '!') {
    var sendTo = from;
    if (isChannel(to)) {
      sendTo = to;
    }

    fs.readdirSync('./observers/').forEach(function (file) {
      var output = require('../observers/' + file)(client, from, to, text, message);
      if (output) {
        client.say(sendTo, output);
      }
    });

  }
};
