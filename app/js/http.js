var request = require('request')

function get (opts, cb) {
  var local = {}

  local.uri = opts.url
  local.timeout = opts.timeout
  local.strictSSL = true

  request(local, function (err, res, body) {
    if (!err && res.statusCode === 200)
      return cb(null)

    return cb(err || res.statusCode)
  })
}

module.exports = get
