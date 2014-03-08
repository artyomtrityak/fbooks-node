var express = require('express'),
    EventEmitter = require('events').EventEmitter,
    app = express();

app.use('/static', express.static(__dirname + '/public'));
app.use(express.logger());
app.use(express.compress());
app.use(express.cookieParser('some secret string'));
app.use(express.cookieSession());
app.use(express.csrf());
app.use(express.json());
app.use(express.urlencoded());

//Set global event emitter
app.set('emitter', new EventEmitter());

//Database. Should be init before modules
require('./database')(app);

//App modules
app.use('/api/books', require('./components/books')(app));
require('./components/authors')(app);
require('./components/search')(app);
require('./components/crawlers')(app);

// TODO: add logging error

// TODO: add client error handling (html page or json)

app.use(function(err, req, res, next){
  console.error(err.stack);
  res.send(500, 'Internal App Error!');
});

app.listen(5000);
