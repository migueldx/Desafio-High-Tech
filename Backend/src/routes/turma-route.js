'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controller/turma-controller.js');

router.post('/', controller.post);
router.put('/aluno/:idTurma', controller.put);
router.get('/', controller.get);

module.exports = router;