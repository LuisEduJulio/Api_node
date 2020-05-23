const express = require('express');
require('./src/config/database')
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!!')
});

app.listen(3333);

