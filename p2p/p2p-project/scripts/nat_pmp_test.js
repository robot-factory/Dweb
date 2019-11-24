var natpmp = require('nat-pmp');

// create a "client" instance connecting to your local gateway
var client = natpmp.connect('192.168.1.1');


// explicitly ask for the current external IP address
client.externalIp(function (err, info) {
  if (err) throw err;
  console.log(info);
  console.log('Current external IP address: %s', info.ip.join('.'));
});


// setup a new port mapping
client.portMapping({ private: 9101, public: 9101, ttl: 3600 }, function (err, info) {
  if (err) throw err;
  console.log(info);
  // {
  //   type: 'tcp',
  //   epoch: 8922109,
  //   private: 22,
  //   public: 2222,
  //   ...
  // }
});