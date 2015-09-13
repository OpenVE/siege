var dns = require('dns')
var url = require('url')

function get (opts, cb) {
  var host = url.parse(opts.url).host
  console.log(dns.getServers())
  dns.resolve4(host, function (err, addresses) {
    if (err)
      return cb(err)

    console.log(addresses)
    return cb(null)
  })
}

module.exports = get
