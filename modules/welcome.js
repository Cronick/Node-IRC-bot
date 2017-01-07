var config  = require('../config.json');
var fs = require('fs');
const pathExists = require('path-exists');

module.exports = function(client, channel, nick, message) {
  var welcome;
  if (pathExists('../welcome.json')) {
    welcome = require('../welcome.json');
    if (nick != config.userName, welcome != undefined && typeof welcome[channel] == "string" && welcome[channel].length > 1) {
      client.say(channel, welcome[channel]+' '+nick+'!');
    }
  }
}
