const path = require('path');
const express = require('express');
const api = require('./api');
const bodyParser = require('body-parser');

const port = 3001;
const app = express();

app.use(bodyParser.json());
app.use(express.static('public'));
app.get('/', function(req, res, next) {
    res.sendFile(path.resolve(__dirname, 'public/index.html'));
});
app.use('/api', api);

app.listen(port, 'localhost', function (err) {
    if (err) {
        console.log(err);
        return;
    }
    console.log('Listening at http://localhost:' + port);
});
