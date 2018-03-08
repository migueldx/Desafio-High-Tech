'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    data: {
        type: Date,
        required: true
    },
    situacao: {
        type: Boolean, 
        required: true
    },
    aula: {
        type: String,
        required: true,
        trim: true
    },
    aluno: {
        type: mongoose.aluno,
        required: true,
    }
});

module.exports = mongoose.model('Presenca', schema);