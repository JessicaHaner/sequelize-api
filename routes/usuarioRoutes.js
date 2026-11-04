const usuarioController = require('../controllers/usuarioController.js');
const express = require('express');
const router = express.Router();


router.post('/', usuarioController.criarUsuario);

module.exports = router; 