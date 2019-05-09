//Install express server
const express = require('express');
const path = require('path');
var morgan = require('morgan');            
var bodyParser = require('body-parser');    
var cors = require('cors');

const app = express();
app.use(morgan('dev'));                                        
app.use(bodyParser.urlencoded({'extended':'true'}));            
app.use(bodyParser.json());                                     
app.use(cors());
 
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'DELETE, PUT');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/www/'));

app.get('/*', function(req,res) {

res.sendFile(path.join(__dirname+'/www/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);