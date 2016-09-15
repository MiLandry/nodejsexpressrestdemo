var express = require('express'),
	mongoose = require('mongoose'),
    winston = require('winston'),
	bodyParser = require('body-parser');

var db;
if (process.env.ENV == 'Test')
	db = mongoose.connect('mongodb://localhost/bookAPI_test');
else
{
	db = mongoose.connect('mongodb://mike:12345@ds033126.mlab.com:33126/book_db');
}

var Book = require('./models/bookModel');
var app = express();

var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


bookRouter = require('./Routes/bookRoutes')(Book);



app.use('/api/books', bookRouter);
//app.use('/api/authors', authorRouter);


app.get('/', function(req, res)
{
	res.send('welcome to my API');
});

app.listen(port, function()
{
    winston.log('info', 'Hello log files!', {
  someKey: 'some-value'
});
	console.log('Running on PORT: ' + port);
});


module.exports = app;