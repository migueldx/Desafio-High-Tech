'use strict'

const mongoose = require('mongoose');
const Aluno = mongoose.model('Aluno');

exports.post = (req, res, next) => {
    var aluno = new Aluno(req.body);
    aluno
        .save()
        .then(x => {
            res.status(201).send({ message: 'Produto cadastrado com sucesso!' });
        }).catch(e => {
            res.status(400).send({
                message: 'Falha ao cadastrar produto!',
                data: e
            });

        });

};

exports.get = (req, res, next) => {
    Aluno
        .find({}, 'ra nome')
        .then(data => {
            res.status(200).send(data);
        }).catch(e => {
            res.status(400).send(e);

        });;
};

exports.getByRa = (req, res, next) => {
    Aluno
        .findOne({
            ra: req.params.ra
        }, 'ra nome')
        .then(data => {
            res.status(200).send(data);
        }).catch(e => {
            res.status(400).send(e);

        });;
};

exports.getById = (req, res, next) => {
    Aluno
        .findById(req.params.id)
        .then(data => {
            res.status(200).send(data);
        }).catch(e => {
            res.status(400).send(e);

        });;
};

exports.put = (req, res, next) => {
    const id = req.params.id;
    res.status(201).send({
        id: id,
        item: req.body
    });
};

exports.delete = (req, res, next) => {
    res.status(200).send(req.body);
};

