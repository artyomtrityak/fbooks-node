var express = require('express'),
    EventEmitter = require('events').EventEmitter,
    app = express(),
    Database = require('./database'),

    // Conponents
    BooksComponent = require('./components/books'),
    AuthorsComponent = require('./components/authors'),
    SearchComponent = require('./components/search');
    CrawlersComponent = require('./components/crawlers');

// Express middlewares
app.use('/static', express.static(__dirname + '/static'));
app.use(express.logger());
app.use(express.compress());
app.use(express.cookieParser('some secret string'));
app.use(express.cookieSession());
//app.use(express.csrf());
app.use(express.json());
app.use(express.urlencoded());

//Set global event emitter
app.set('emitter', new EventEmitter());

//Database. Should be init before modules
Database.connect(app);

//App modules
app.use('/api/books', BooksComponent(app));
app.use('/api/authors', AuthorsComponent(app));
SearchComponent(app);
CrawlersComponent(app);

// Make SQL relationships (one-to-one, many-to-many etc)
// Should be after components initialzation
Database.relationships(app);

// TODO: add logging error

// TODO: add client error handling (html page or json)

app.use(function(err, req, res, next){
  console.error(err.stack);
  res.send(500, 'Internal App Error!');
});

app.listen(5000);
