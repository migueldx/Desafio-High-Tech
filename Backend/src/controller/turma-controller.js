'use strict'

const repository = require('../repository/turma-repository');

exports.post = async (req, res, next) => {
    try {
        await repository.create(req.body)
        res.status(201).send({ message: 'Turma cadastrada com sucesso!' });
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
}

exports.post = async (req, res, next) => {
    try {
        await repository.update(req.params.idTurma, req.body)
        res.status(201).send({ message: 'Aluno atualizado com sucesso!' });
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
}

exports.get = async (req, res, next) => {
    try {
        var data = await repository.get();
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
}