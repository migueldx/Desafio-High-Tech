'use strict'

const mongoose = require('mongoose');
const Aula = mongoose.model('Aula');

exports.create = async (data) => {
    var aula = new Aula(data);
    await aula.save();
}


exports.get = async () => {
    const res = await Aula
        .find({}, 'nome data listaPresenca turma')
        .populate('turma', 'alunos nome')
        .populate('listaPresenca.aluno', 'nome');
    return res;
}