const path = require('path');
const express = require('express');
const api = require('./api');
const bodyParser = require('body-parser');
const mocks = require('./api/mock');

const port = 3001;
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.use(bodyParser.json());
app.use(express.static('public'));
app.get('/', function(req, res, next) {
    res.sendFile(path.resolve(__dirname, 'public/index.html'));
});
app.use('/api', api);

io.on('connection', function(client) {
    client.on('get articles', function() {
        io.emit('get articles', mocks.articles);
    });
})


http.listen(port, 'localhost', function (err) {
    if (err) {
        console.log(err);
        return;
    }
    console.log('Listening at http://localhost:' + port);
});
