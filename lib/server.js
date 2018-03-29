var http = require('http');

this.server = http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('Hello World!');
  splitQuery(req.url);
  res.end();
}).listen(4000);


splitQuery = function(requrl) {
  var method = requrl.substring(0,4)
  if (method === "set?")
  return requrl.split("=")
}
