const express = require('express');
const router = express.Router();
app.use(express.json());

const pruebasontroller = require('../controller/pruebaController')

router.get('/', pruebasontroller.traerPruebas);
router.post('/', pruebasontroller.adicionarPrueba);
router.put('/:id', pruebasontroller.actualizarPrueba);
router.delete('/:id', pruebasontroller.eliminarPrueba);

module.exports=router