var server = require('../lib/server');

describe('server', function () {
  before(function () {
    server.listen(4000);
  });

  after(function () {
    server.close();
  });
});

var assert = require('assert'),
    http = require('http');

describe('/', function (done) {
  it('should return 200', function (done) {
    http.get('http://localhost:4000', function (res) {
      assert.equal(200, res.statusCode);
      done();
    });
  });

  it('should say "Hello, world!"', function (done) {
    http.get('http://localhost:4000', function (res) {
      var dataToCheckWith = '';

      res.on('data', function (chunk) {
        dataToCheckWith += chunk;
      });

      res.on('end', function () {
        assert.equal('Hello World!', dataToCheckWith);
        done();
      });
    });
  });
});

describe('sliceQuery', function () {
  it('should return split req', function (done) {
    var output = sliceQuery('set?somekey=somevalue')
    console.log(output)
    assert.equal(output[0], 'somekey');
    assert.equal(output[1], 'somevalue');
    done()
  });
});
