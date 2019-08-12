var path = require('path');
var http = require('http');
var morgan = require('morgan');
var express = require('express');
var app = express();

app.set('views', path.join(__dirname, 'templates'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    return res.render('index', {title: 'express practice'})
})
app.use(morgan('combined'));

var server = http.createServer(app);
server.listen(3000)
console.log('3000');
