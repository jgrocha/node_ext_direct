
var express = require('express')
, load = require('express-load')
, http = require('http')
, path = require('path');
var expressWinston = require('express-winston');
var winston = require('winston'); 
var directhandler = require('./lib/direct');

var app = express();

// Models

console.log('Load Models');
var models = require('./models/models.js');
//console.log(models);
GLOBAL.models = models;
//console.log('Models');


app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('view engine', 'ejs');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());

  app.use(expressWinston.logger({
    transports: [
    new winston.transports.Console({
      json: false,
      colorize: true
    })
    ]
  }));


  app.use(express.cookieParser('your secret here'));
  app.use(express.session());
  app.use('/direct', directhandler('on', models));
  app.use(app.router);
  app.use(expressWinston.errorLogger({
    transports: [
    new winston.transports.Console({
      json: true,
      colorize: true
    })
    ]
  }));

  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

// Load the Models, Controllers and Routes
load('controllers')
.then('routes')
.into(app);



http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
