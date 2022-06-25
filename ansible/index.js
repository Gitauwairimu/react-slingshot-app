var http = require("http");
var server = http.createServer(function (req, res) {
res.writeHead(200);
res.end("Vroom! Here we go!");
});
server.listen(3000);
