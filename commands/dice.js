var isChannel = require('../modules/is-channel.js');

module.exports = function(client, from, to, text, message) {

  function printHelp(sendTo) {
      client.say(sendTo, "Brug: !dice XdY - X er antallet af terninger (Max: 20) and Y er det højeste man kan slå pr. terning (Max: 100)");
  }

  function clamp(num, min, max) {
    return Math.min(Math.max(num, min), max);
  }

  function roll(dice, faces, sendTo) {
    var i;
    var results = [];

    dice = clamp(dice, 1, 20);
    faces = clamp(faces, 1, 100);

    for(i = 0; i < dice; i++) {
      results.push( (Math.floor(Math.random() * faces) + 1).toString(10) );
    }
    var total = 0;
		for(i=0;i<dice;i++) {
			var num = results[i];
			total += +results[i];
		}
    client.say(sendTo, from+' slog: '+results.join(", ")+' (I alt: '+total+')');
  }

  function getSum(total, num) {
    return total + num;
  }

  var args = text.split(" ");
  var sendTo = from;
  if (isChannel(to)) {
    sendTo = to;
  }

  if (typeof args[1] !== 'undefined' && args[1].trim() !== ''){
    var params = args[1].split('d');
    if (params.length !== 2) {
        printHelp(sendTo);
        return;
    }

    var num1 = parseInt(params[0].trim()),
        num2 = parseInt(params[1].trim());
    if (isNaN(num1) || isNaN(num2)) {
        printHelp(sendTo);
    } else {
        roll(num1, num2, sendTo);
    }
  } else if (typeof args[1] == 'help'){
    printHelp(sendTo);
  } else {
    roll(1, 6, sendTo);
  }

};
