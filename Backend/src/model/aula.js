'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
   
    nome: {
        type: String,
        required: true,
        trim: true
    },

    data: {
        type: Date,
        required: true
    },

    listaPresenca: [{
        aluno:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Aluno'},


        situacao: {
            type: String,
            required: true,
            enum: ['Presente', 'Ausente'],
            default: 'Presente'
        },
    }],
     turma:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Turma'}
   


});

module.exports = mongoose.model('Aula', schema);