'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const router = express.Router();

//Conectaao banco
mongoose.connect('mongodb://miguel:miguel@ds012578.mlab.com:12578/desafiohightech');

//Carrega os Models
const Aluno = require('./model/aluno')

//Carrega as Rotas
const indexRoute = require('./routes/index-route');
const alunoRoute = require('./routes/aluno-route');
const turmaRoute = require('./routes/turma-route');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', indexRoute);
app.use('/aluno', alunoRoute);
app.use('/turma', turmaRoute);


module.exports = app;
