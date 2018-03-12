'use strict'

const mongoose = require('mongoose');
const Aula = mongoose.model('Aula');
const Turma = mongoose.model('Turma');

exports.create = async (data) => {
    var aula = new Aula(data);
    await aula.save();
}


exports.get = async () => {
    const res = await Aula
        .find({}, 'nome data listaPresenca turma')
        .populate('listaPresenca.aluno')
        .populate('turma');
    return res;
}