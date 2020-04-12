var express = require('express');
var consign = require('consign');
//var bootstrap = require('bootstrap');
var bodyParser = require('body-parser');

var app = express();
app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(express.static('./app/public'));

app.use(bodyParser.urlencoded({extend: true}));

consign()
	.include('app/routes')
	.then('config/dbConnection.js')
	.into(app);

module.exports = app;