'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config');


const app = express();
const router = express.Router();

//Conectaao banco
mongoose.connect(config.connectionString);

//Carrega os Models
const Aluno = require('./model/aluno')
const Aula = require('./model/aula')
const Turma = require('./model/turma')


//Carrega as Rotas
const indexRoute = require('./routes/index-route');
const alunoRoute = require('./routes/aluno-route');
const turmaRoute = require('./routes/turma-route');
const aulaRoute = require('./routes/aula-route');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Habilita o CORS
app.use(function(req,res,next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-access-token');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});

app.use('/', indexRoute);
app.use('/aluno', alunoRoute);
app.use('/turma', turmaRoute);
app.use('/aula', aulaRoute);


module.exports = app;
