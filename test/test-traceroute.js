var test = require('tape')
var trace = require('../app/js/traceroute.js')

test('trace route to google', function (t) {
  trace({
    url: 'https://www.google.com',
    timeout: 1
  }, function (err) {
    t.error(err)
    t.end()
  })
})
