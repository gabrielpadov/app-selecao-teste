<<<<<<< HEAD
//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/www/'));

app.get('/*', function(req,res) {

res.sendFile(path.join(__dirname+'/www/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
=======
var express  = require('express');
var app      = express();                               
// var morgan = require('morgan');            
var bodyParser = require('body-parser');    
// var cors = require('cors');
 
// app.use(morgan('dev'));                                        
app.use(bodyParser.urlencoded({'extended':'true'}));            
app.use(bodyParser.json());                                     
// app.use(cors());
 
/* app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'DELETE, PUT');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});*/
 
app.use(express.static('www'));
app.set('port', process.env.PORT || 8080);
app.listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});
>>>>>>> 85ed7c1cd13d34956cb962bbc6173b00108239f7
