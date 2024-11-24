const tester = require('../models/tester');
const testerinstancia = new tester()

exports.traerTester = async(req, res) => {
    try{
        let rest = await testerinstancia.listartester();
        console.log(rest)
        res.json(rest)
    }catch(error){
        res.json({error: "error al obtener el tester"})
    }
};
exports.agregartester = async(req, res) => {
    try{
        let respuesta = await testerinstancia.guardartester()
        res.json(respuesta)
    }
    catch(error){
        res.json({error:"error al agregar tester"})
    }
}