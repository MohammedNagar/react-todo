var express = require('express');

// Create our app
var app = express();
const PORT = process.env.PORT || 3000;

app.use(function (req, res, next){
  if (req.headers['x-forwarded-proto'] === 'https') {
    res.redirect('http://' + req.hostname + req.url);
  } else {
    next();
  }
});

app.use(express.static('public'));

app.listen(PORT, function () {
  console.log('Express server is up on port ' + PORT);
});


//http://stackoverflow.com/questions/3755529/git-remote-doesnt-seem-to-be-working-at-all
//http://stackoverflow.com/questions/8786564/cannot-push-to-heroku-because-key-fingerprint
//http://stackoverflow.com/questions/17846529/could-not-open-a-connection-to-your-authentication-agent
