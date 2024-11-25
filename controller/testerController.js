const tester = require('../models/tester');
const testerinstancia = new tester()

exports.traerTesters = async (req, res) => {
    console.log('Ruta de tester GET');
    try {
        let resultado = await testerinstancia.listarTodos();
        res.json(resultado);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error en la petición' });
    }
};

exports.adicionarTester = async (req, res) => {
    try {
        let resultado = await testerinstancia.guardar(req.body);
        res.status(201).json(resultado); 
    } catch (e) {
        console.log(e);  
        res.status(500).json({ error: 'Error en la petición: ' + e.message });
    }
};


exports.actualizarTester = async (req, res) => {
    console.log('Ruta de tester actualizar');
    try {
        const { id } = req.params;
        const datosActualizados = req.body;

        let resultado = await testerinstancia.actualizar(id, datosActualizados);
        res.json(resultado);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error en la petición' });
    }
};


exports.eliminarTester = async (req, res) => {
    console.log('Ruta de tester eliminar');
    try {
        const { id } = req.params;

        let resultado = await testerinstancia.eliminar(id);
        res.json(resultado);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error en la petición' });
    }
};


