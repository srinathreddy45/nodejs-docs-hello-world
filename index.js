var http = require('http');

var server = http.createServer(function(request, response) {
//Getting response updated
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello Docker World!");

});

var port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
