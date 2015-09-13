var test = require('tape')
var http = require('../app/js/http.js')

test('get a website via http', function (t) {
  http({
    url: 'https://www.google.com',
    timeout: 15000
  }, function (err) {
    t.error(err)
    t.end()
  })
})
