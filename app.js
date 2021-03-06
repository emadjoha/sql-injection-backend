const express = require('express');
const bodyParser = require('body-parser');
const app = express();

var routeModel = require('./routes/userInfo.route');


// parse application/json
app.use(bodyParser.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse the raw data
app.use(bodyParser.raw());
// parse text
app.use(bodyParser.text());



routeModel.route(app);



//Set Port
app.listen(3000);