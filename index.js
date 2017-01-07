var irc = require("irc");
var config  = require('./config.json');

var welcome = require('./modules/welcome.js');
var commandHandler = require('./modules/command-handler.js');
var observerHandler = require('./modules/observer-handler.js');

var client = new irc.Client(config.server, config.userName, config);

client.addListener("registered", function() {
  client.say("nickserv", "identify "+config.password);
});

client.addListener('error', function(message) {
  console.log('error: ', message);
});

client.addListener('message', function(from, to, text, message) {
    commandHandler(client, from, to, text, message);
});

client.addListener("join", function(channel, nick, message) {
  welcome(client, channel, nick, message);
});
