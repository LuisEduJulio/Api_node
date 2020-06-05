const express = require('express');
require('./config/database')
const path = require('path');

const app = express();

app.use(express.json());

app.use('/files', express.static(
    path.resolve(__dirname, "..", "tmp", "upload")
))
app.use(require('./routes'))

app.listen(3333);

