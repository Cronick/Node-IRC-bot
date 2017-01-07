var fs = require('fs');
var isChannel = require('./is-channel.js');
var isAdmin = require('./is-admin.js');

module.exports = function(client, from, to, text, message) {

  var internalCommand = {};

  var opts = {
    command: String(text.split(' ')[0]).replace('!', '').trim(),
    argument: text.substring(String(text.split(' ')[0]).length).trim(),
    messageToSend: ''
  }

  function externalCommand(opts) {
    if (fs.existsSync('./commands/' + opts.command + '.js')) {
      var output = require('../commands/' + opts.command + '.js')(client, from, to, text, message);
      if (output) {
        client.say(sendTo, output);
      }
    }
  };

  internalCommand.join = function(opts) {
    if (isAdmin(message.prefix)) {
      client.join(opts.argument);
    }
  };

  internalCommand.leave = function(opts) {
    if (isAdmin(message.prefix)) {
      if (text.split(' ')[1] != undefined && text.split(' ')[1].indexOf('#') > -1) {
        client.part(text.split(' ')[1]);
      } else {
        client.part(sendTo);
      }
    }
  };

  if (text && text.length > 2 && text[0] == '!') {
    var sendTo = from;
    if (isChannel(to)) {
      sendTo = to;
    }
    if (typeof internalCommand[opts.command]  === 'function') {
      internalCommand[opts.command](opts);
    } else {
      externalCommand(opts);
    }
  }
};
