var natUpnp = require('nat-upnp');

var client = natUpnp.createClient();

client.portMapping({
  public: 12345,
  private: 54321,
  ttl: 10
}, function (err) {
  // Will be called once finished
  if (err) {
    console.log('portMapping err', err)
  } else {
    console.log('portMapping success!')
  }
});

client.portUnmapping({
  public: 12345
});

client.getMappings(function (err, results) {
  if (err) {
    console.log('getMappings err')
  } else {
    console.log('getMappings:\r\n', results)
  }
});

client.getMappings({ local: true }, function (err, results) {
  if (err) {
    console.log('getMappings err')
  } else {
    console.log('getMappings:\r\n', results)
  }
});

client.externalIp(function (err, ip) {
  if (err) {
    console.log('externalIp err')
  } else {
    console.log('externalIp:\r\n', ip)
  }
});