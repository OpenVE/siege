var spawn = require('child_process').spawn
var url = require('url')

function run (opts, cb) {
  var host = url.parse(opts.url).host
  var trace = spawn('traceroute', [
    '-w',
    opts.timeout,
    host
  ])

  trace.stdout.on('data', function (data) {
    console.log(data.toString())
  })

  trace.on('close', function (code) {
    var err = code === 0 ? null : code
    return cb(err)
  })
}

module.exports = run
