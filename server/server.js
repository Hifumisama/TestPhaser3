var express = require('express');
var path = require('path');

var app = express();
var port = process.env.PORT || 6501;

// sendFile will go here
app.use(express.static(path.join(__dirname, '/assets')));
app.get('/', function (req, res)
{
    res.sendFile(path.join(__dirname, '/index.html'));
});

app.listen(port);
console.log('Server started at http://localhost:' + port);
