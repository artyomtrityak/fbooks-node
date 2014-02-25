var express = require('express'),
    app = express();

app.use('/static', express.static(__dirname + '/public'));
app.use(express.logger());
app.use(express.compress());
app.use(express.cookieParser('some secret string'));
app.use(express.cookieSession());
app.use(express.csrf());
app.use(express.json());
app.use(express.urlencoded());

// TODO: add client error handling (html page or json)

// TODO: add logging error

app.get('/user/:id', function(req, res){
  console.log(req.cookies);
  res.send('userZ ' + req.params.id);
});

app.use(function(err, req, res, next){
  console.error(err.stack);
  res.send(500, 'Internal App Error!');
});

app.use(function(req, res){
  res.send('Hello');
});

app.listen(5000);
