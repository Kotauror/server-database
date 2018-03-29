var http = require('http');


this.server = http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('Hello World!');
  print(req.url);
  res.end();
}).listen(4000);

function print(requrl) {
  console.log(requrl + "hehheh")
}
