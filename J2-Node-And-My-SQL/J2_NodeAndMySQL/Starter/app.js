var express = require('express');
var app = express();

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Smile0759',
  database : 'world'
});

connection.query('SELECT * from city', function (error, rows) {
	if (error) throw error;
	console.log(rows);
  });

 
var apiController = require('./controllers/apiController');
var htmlController = require('./controllers/htmlController');

var port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.use('/', function (req, res, next) {
	console.log('Request Url:' + req.url);

});

htmlController(app);

apiController(app);

app.listen(port);