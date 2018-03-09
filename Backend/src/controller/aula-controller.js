'use strict'

const repository = require('../repository/aula-repository');

exports.post = async (req, res, next) => {
    try {
        await repository.create(req.body)
        res.status(201).send({ message: 'Aula cadastrada com sucesso!' });
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