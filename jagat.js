var config = require('./config.json');
const LaunchDarkly = require('ldclient-node');
ldclient = LaunchDarkly.init(config.development.ldc_key)
var jagat = "ahem";
var status = "married";

ldclient.once('ready', function() {
  ldclient.variation('temp', {key: 'jagatveer.singh@sourcefuse.com'}, false, function(err, showFeature) {
    if (showFeature) {
      if(status == "single")
      {
        jagat = 'I am the king';
      }
      console.log(jagat);
    } else {
      if(status == "married")
      {
        jagat = 'I could be a king';
      }
      console.log(jagat);
    }
  });
});
