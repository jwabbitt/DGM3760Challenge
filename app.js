var express = require('express');
    mongoose = require('mongoose');
    bodyParser = require('body-parser');

var db;

db = mongoose.connect('mongodb://localHost/carAPI');

var Car = require('./models/carModel');

var app = express();

var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

carRouter = require('./Routes/carRoutes')(Car);

app.use('/api/cars', carRouter)

app.get('/', function(req, res){
    res.send('Welcome to my Car API!');
});

app.listen(port, function(){
    console.log('Gulp is running my app on PORT: ' + port);
});

module.exports = app;
