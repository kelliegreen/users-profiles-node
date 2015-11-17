var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var cors = require('cors');

var app = express();

var userCtrl = require('./controllers/userCtrl');
var profileCtrl = require('./controllers/profileCtrl');
app.use(bodyParser.json());
app.use(cors(corsOptions));
var config = require('./config.js');
app.use(session({ secret: config.sessionSecret }));
app.use(express.static(__dirname + '/public'));
console.log(__dirname);
app.get('/profile', profileCtrl.friendFinder);
app.post('/user/login', userCtrl.login);



var corsOptions = {
	origin: 'http://localhost:9000'
};





app.listen(9000, function() {
	console.log('listening to port 9000');
});