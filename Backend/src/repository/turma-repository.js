'use strict'

const mongoose = require('mongoose');
const Turma = mongoose.model('Turma');

exports.create = async (data) => {
    var turma = new Turma(data);
    await turma.save();
}

exports.get = async () => {
    const res = await Turma
        .find({}, 'alunos nome')
        .populate('alunos.aluno', 'ra nome');
    return res;
}