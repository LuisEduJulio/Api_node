const { Router } = require('express');
const multer = require('multer');
const multerConfig = require('../config/multer');
const upload = multer(multerConfig);

const SessionsController = require('../app/controllers/SessionController')
const UserController = require('../app/controllers/UserController')
const FileController = require('../app/controllers/FileController')

const routes = new Router();

routes.post('/session', SessionsController.store);

routes.get('/users', UserController.index);
routes.post('/users', UserController.store);
routes.put('/users/:id', UserController.update);
routes.delete('/users/:id', UserController.destroy);

routes.post('/files', upload.single('file'), FileController.store);

module.exports = routes;