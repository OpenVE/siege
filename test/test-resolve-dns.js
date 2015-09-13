var test = require('tape')
var resolve = require('../app/js/resolve-dns.js')

test('resolve google', function (t) {
  resolve({ url: 'https://www.google.com' }, function (err) {
    t.error(err, 'no error')
    t.end()
  })
})
