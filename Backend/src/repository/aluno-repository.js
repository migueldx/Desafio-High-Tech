'use strict'

const mongoose = require('mongoose');
const Aluno = mongoose.model('Aluno');

exports.create = async (data) => {
    var aluno = new Aluno(data);
    await aluno.save();
}

exports.get = async () => {
    const res = await Aluno
        .find({}, 'ra nome');
    return res;
}

exports.getByRa = async (ra) => {
    const res = await Aluno
        .findOne({
            ra: ra
        }, 'ra nome');
    return res;
}

exports.getById = async (id) => {
    const res = await Aluno
        .findById(id);
    return res;
}

exports.getByTag = async (tag) => {
    const res = await Product
        .find({
            tags: tag,
            active: true
        }, 'title description price slug tags');
    return res;
}

exports.update = async (data) => {
    await Aluno
        .findByIdAndUpdate(data._id, {
            $set: {
                nome: data.nome
            },
        });
}

exports.delete = async (id) => {
    await Aluno
        .findOneAndRemove({'_id' : id});

}