var express = require('express');
var user = require('./app/user.js');

var app = express();

var users = new Array;

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// serving an example html
app.get('/', function(request, response) {
  response.sendFile('index.html', {root: __dirname })

});

// if the API is up, it should send OK
app.get('/status', function(request, response) {
  response.send('{"status":"OK"}');
});

app.get('/testing', function(request, response) {
  response.send("I'm a test too! :D");
});


app.put('/user/:name/:last_name/:tg_nick/:password', function(req, response) {
  var new_user = new user.User(req.params.name, req.params.last_name,
    req.params.tg_nick, req.params.password);
  users.push(new_user);
  response.send(new_user);
});

app.get('/users', function(request, response) {
  response.send(users);
});

if (!module.parent) {
  app.listen(app.get('port'), function() {
    console.log("Node app is running at localhost:" + app.get('port'));
  });
}
module.exports = app;
