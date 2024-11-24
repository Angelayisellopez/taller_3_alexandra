const db = require('../database/databse');

class tester{
    async listartester(){
        let [lista] = await connect.query('SELECT * FROM tester');
        return lista;
    };
    async guardartester(tester){
        let {id, nombretester}= tester;
        console.log(tester)
        let [guardar] = await connect.query('insert into tester(id, nombretester) values(?, ?)'
            [id, nombretester]
        );
        return{id: guardar.insertid,...tester};
    }
    async actualizartester (id,tester){
        let {nombretester} = tester;
        let [actualizar] = await db.connect.query ('UPDATE proyecto SSET nombretester= ? WHERE id = ?',
            [nombretester, id]
        );
        return actualizar.affectedRows > 0;
    }
    async eliminartester(id){
        let [eliminar] = await db.connect.query('DELETE FROM tester WHERE id = ?',        
        );
        return {mensaje:`tester con id ${id} eliminado`}
    }
    
}
module.exports = tester;
