var http = require("http");
var server = http.createServer(function (req, res) {
res.writeHead(200);
res.end("Charles id the man. DevOps!");
});
server.listen(3000);
