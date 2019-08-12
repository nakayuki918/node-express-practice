var http = require('http');
var express = require('express');
var app = express();

app.get('/', function(req, res) {
    return res.send(200)
})

var server = http.createServer(app);
server.listen(3000)

// var server = http.createServer(function (req, res) {
//     console.dir(req, res);
//     res.writeHead(200, { 'ContentType': 'text/plain' });
//     res.end('HelloWorld');
// });
