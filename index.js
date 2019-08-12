var path = require('path');
var http = require('http');
var bodyParser = require('body-parser')
var morgan = require('morgan');
var express = require('express');
var app = express();

app.set('views', path.join(__dirname, 'templates'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false}))
app.use(morgan('combined'));

app.get('/', function(req, res) {
    return res.render('index', {title: 'express practice'})
})

app.get('/form', function (req, res) {
    return res.render('form');
})

app.post('/form', function (req, res) {
    return res.render('result',
      {
          username: req.body.username,
          message: req.body.message,
      }
  )
})

var server = http.createServer(app);
server.listen(3000)
console.log('3000');
