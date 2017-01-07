var isChannel = require('../modules/is-channel.js');
var request = require('request');

module.exports = function(client, from, to, text, message) {

  function isNumber( input ) {
      return !isNaN( input );
  }

  var args = text.split(" ");
  var sendTo = from;
  if (isChannel(to)) {
    sendTo = to;
  }

  if (isNumber(args[1])){
    console.log("true");
    request('http://xkcd.com/' + args[1] + '/info.0.json', function(error, response, body) {
			body = JSON.parse(body);
			client.say(to, body.safe_title + ' - ' + body.alt);
			client.say(to, body.img);
		});
  } else {
    request('http://xkcd.com/info.0.json', function(error, response, body) {
		body = JSON.parse(body);
		var top = body.num;
		var randNumber = Math.floor(Math.random() * top) + 1;
		request('http://xkcd.com/' + randNumber + '/info.0.json', function(er, res, bod) {
			bod = JSON.parse(bod);
			client.say(to, bod.safe_title + ' - ' + bod.alt);
			client.say(to, bod.img);
		});
	});
  }
};
