const http = require('http');
const fs = require('fs');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const config = require('./config');
const setupController = require('./controllers/setupController');
const  apiController = require('./controllers/apiController');

var port = process.env.PORT || 3000;
app.use('/assets', express.static(__dirname + '/public'));
app.set("view engine", "ejs");

app.get('/', function(req, res){
    res.render('index');
})

mongoose.connect(config.getDBConnectionString());
setupController(app);
apiController(app);

app.listen(port);