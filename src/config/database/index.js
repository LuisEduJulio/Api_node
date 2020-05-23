const mongoose = require('mongoose');

const user = 'paehrces';
const password = '147963';
const url = 'paehrces-mbfek.mongodb.net/paehrces?retryWrites=true&w=majority';

const connection = mongoose.connect(`mongodb+srv://${user}:${password}@${url}`, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(() => console.log('Banco Conectado!')).catch(err => console.log(err));

module.exports = connection;