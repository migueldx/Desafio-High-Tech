'use strict'

const mongoose = require('mongoose');
const Aluno = mongoose.model('Aluno');

exports.post = (req, res, next) => {
    var aluno = new Aluno(req.body);
    aluno
        .save()
        .then(x => {
            res.status(201).send({ message: 'Aluno cadastrado com sucesso!' });
        }).catch(e => {
            res.status(400).send({
                message: 'Falha ao cadastrar Aluno!',
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

exports.getByTag = (req, res, next) => {
    Product
        .find({
            tags: req.params.tag,
            active: true
        }, 'title description price slug tags')
        .then(data => {
            res.status(200).send(data);
        }).catch(e => {
            res.status(400).send(e);
        });
};

exports.put = (req, res, next) => {
     Aluno
        .findByIdAndUpdate (req.params.id, {
            $set:{
                nome: req.body.nome
            }
        }).then(x => {
            res.status(201).send({message: 'Aluno atualizado com sucesso!'});
        }).catch(e => {
            res.status(400).send({
                message: 'Falha ao atualizar Aluno',
                data: e
            });

        });;
};

exports.delete = (req, res, next) => {
     Aluno
        .findOneAndRemove (req.body.id)
        .then(x => {
            res.status(200).send({message: 'Aluno removido com sucesso!'});
        }).catch(e => {
            res.status(400).send({
                message: 'Falha ao remover Aluno',
                data: e
            });

        });;
};

