var config  = require('../config.json');

module.exports = function(string) {
  var channelPrefixes = config.channelPrefixes.split('');
  return channelPrefixes.some(function(value) {
    return string.trim().indexOf(value) == 0;
  });
}
