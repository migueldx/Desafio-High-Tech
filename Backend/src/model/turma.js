'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    nome: {
        type: String,
        required: true,
        trim: true
    },
    alunos: [{
        nome: String
    }]
});

module.exports = mongoose.model('Turma', schema);