'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    ra: {
        type: Number,
        required: true,
        unique: true,
        index: true
    },
    nome:{
        type: String,
        required: true,
        trim: true
    },
    turmas: [{
         turma: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Turma'
        },
    }] 
});

module.exports = mongoose.model('Aluno', schema);

