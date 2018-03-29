var http = require('http');

this.server = http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('Hello World!');
  saveQuery(req.url);
  res.end();
}).listen(4000);


saveQuery = function(requrl) {
  var method = requrl.substring(0,4)
  if (method == "set?") {
    var array = sliceQuery(requrl)
    storage.pairs.push(array)
  }
}

sliceQuery = function(requrl) {
  var slicedString = requrl.slice(4);
  return slicedString.split("=")
}

function Storage() {
  this.pairs = []
}

storage = new Storage()
