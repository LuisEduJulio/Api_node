const express = require('express');
require('./config/database')
const app = express();
app.use(express.json());


app.use(require('./routes'))

app.get('/', (req, res) => {
    res.send('Hello World!!')
});

app.listen(3333);

