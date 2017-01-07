var config  = require('../config.json');

module.exports = function(someone) {
  if (Array.isArray(config.admins) && config.admins.some(function(value) { return someone.indexOf(value) >= 0; })) {
    return true;
  } else if (typeof config.admins == "string" && config.admins == someone) {
    return true;
  } else {
    return false;
  }
};
