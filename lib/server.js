var http = require('http');

this.server = http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('Hello World!');
  saveQuery(req.url, res);
  searchQuery(req.url, res);
  res.end();
}).listen(4000);


saveQuery = function(requrl, res) {
  var method = requrl.substring(1,5)
  if (method == "set?") {
    var array = sliceQuery(requrl)
    storage.pairs.push(array)
    res.write(" I've saved a pair " + array[0] + " and " + array[1]);
  }
}

searchQuery = function(requrl, res) {
  var method = requrl.substring(1,5)
  if (method == "get?") {
    var array = sliceQuery(requrl)
    storage.pairs.forEach(function(pair) {
      if (pair[0] == array[1]) {
        res.write(" Here is the value you're looking for: " + pair[1]);
      }
    })
  }
}

sliceQuery = function(requrl) {
  var slicedString = requrl.slice(5);
  return slicedString.split("=")
}

function Storage() {
  this.pairs = []
}

storage = new Storage()
