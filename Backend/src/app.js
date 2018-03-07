'use strict'

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();

//Carrega as Rotas
const indexRoute = require('./routes/index-route.js');
const alunoRoute = require('./routes/aluno-route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', indexRoute);
app.use('/aluno', alunoRoute);


module.exports = app;
