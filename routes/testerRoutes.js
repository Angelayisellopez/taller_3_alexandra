const express = require('express');
let testerController = require('../controller/testerController');
const router = express.Router();
app.use(express.json());
router.get('/', testerController.traerTesters);
router.post('/', testerController.adicionarTester);
router.put('/:id', testerController.actualizarTester);
router.delete('/:id', testerController.eliminarTester);

module.exports=router

