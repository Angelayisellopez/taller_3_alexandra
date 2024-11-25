const express = require('express');
const router = express.Router();
app.use(express.json());
const proyetoontroller = require('../controller/proyectoController')

router.get('/', proyetoontroller.traerProyectos);
router.post('/', proyetoontroller.adicionarProyecto);
router.put('/:id', proyetoontroller.actualizarProyecto);
router.delete('/:id', proyetoontroller.eliminarProyecto)

module.exports=router;