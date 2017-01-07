var isChannel = require('../modules/is-channel.js');
var request = require('request');

module.exports = function(client, from, to, text, message) {

  var args = text.split(" ");

  var sendTo = from;
  if (isChannel(to)) {
    sendTo = to;
  }

  if (typeof args[1] !== 'undefined' && args[1].trim() !== ''){
    url = args[1].replace(/^http:\/\//, '');

    request('http://isup.me/' + url, function (error, response, body) {
      if (error || response.statusCode !== 200) {
        client.action(sendTo, 'Something is wrong with isup.me.');
      }

      if (!error && response.statusCode === 200) {
        if (body.search('is up') !== -1) {
          response = "kan se at " + args[1] + ' ser ud til at være oppe.';
        } else if (body.search('Huh') !== -1) {
          response = "føler der er en som prøver at snyde ham. " + args[1] + " ligner i hvert fald ikke en hjemmeside.";
        } else if (body.search('down from here') !== -1) {
          response = "er ked af det! " + args[1] + " ser ud til at være nede :(";
        }
        client.action(sendTo, response);
      }
    });
  } else {
    client.action(sendTo, 'mangler en hjemmeside at checke.');
  }
};
