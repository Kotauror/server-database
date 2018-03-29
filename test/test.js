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

describe('splitQuery', function () {
  it('should console log url', function (done) {
    var output = splitQuery("set?somekey=somevalue")
    console.log(output + "**")
    assert.equal(output, ["set?", "somekey", "somevalue"]);
    done()
  });
});
