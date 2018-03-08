'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const router = express.Router();

//Conectaao banco
mongoose.connect('mongodb://miguel:miguel@ds012578.mlab.com:12578/desafiohightech');

//Carrega as Rotas
const indexRoute = require('./routes/index-route.js');
const alunoRoute = require('./routes/aluno-route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', indexRoute);
app.use('/aluno', alunoRoute);


module.exports = app;
