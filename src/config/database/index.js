const mongoose = require('mongoose');

const user = '';
const password = '';
const url = '';

const connection = mongoose.connect(`mongodb+srv://${user}:${password}@${url}`, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(() => console.log('Banco Conectado!')).catch(err => console.log(err));

module.exports = connection;