'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controller/aluno-controller.js');

router.post('/', controller.post);

router.get('/', controller.get);

router.get('/:ra', controller.getByRa);

router.get('/admin/:id', controller.getById);

router.put('/', controller.put) ;

router.delete('/:id', controller.delete);

module.exports = router;