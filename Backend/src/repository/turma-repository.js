'use strict'

const mongoose = require('mongoose');
const Turma = mongoose.model('Turma');

exports.create = async (data) => {
    var turma = new Turma(data);
    await turma.save();
}

exports.update = async (idTurma, data) => {
    await Turma
        .findByIdAndUpdate(idTurma,
        { $push: { alunos: [data] } },
        );
}

exports.get = async () => {
    const res = await Turma
        .find({}, 'alunos nome')
        .populate('alunos', 'ra nome');
    return res;
}

