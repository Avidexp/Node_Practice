var express = require('express');
var app = express();

var port = process.env.PORT || 3000;


app.get('/', function(req, res){
rea.send('<html><head></head><body><h1>Hello World!</h1></body></html>');

});

app.get('/api', function(req,res){
    res.json({ firstname: 'Dylan', lastname: 'Jackson' });
})
// app.post('/', function(req, res){Y
    
// });
app.listen(port); // starts http server on port 3000




