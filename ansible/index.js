var http = require("http");
var server = http.createServer(function (req, res) {
res.writeHead(200);
res.end("Charles, Here we go, again!");
});
server.listen(3000);
