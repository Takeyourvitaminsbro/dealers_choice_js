const express = require('express');
const morgan = require('morgan');
const characters = require('./charactersHome');

const app = express();

app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));

app.get("/", (req, res) => {
    res.send(characters());
});

const PORT = 1969;

app.listen(PORT, () => {
    console.log('App listening at http://localhost:${PORT}');
});