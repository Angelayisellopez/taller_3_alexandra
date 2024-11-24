const db = require('../database/databse');

class proyecto{
    async listarproyecto(){
        let [lista] = await connect.query('SELECT * FROM proyecto');
        return lista;
    };
    async guardarproyectos(proyecto){
        let {id, nombreproyecto}= proyecto;
        console.log(proyecto)
        let [guardar] = await connect.query('insert into proyecto(id, nombreproyecto) values(?, ?)'
            [id, nombreproyecto]
        );
        return{id: guardar.insertid,...proyecto};
    }
    async actualizarproyectos (id,proyecto){
        let {nombreproyecto} = proyecto;
        let [actualizar] = await db.connect.query ('UPDATE proyecto SSET nombreproyecto = ? WHERE id = ?',
            [nombreproyecto, id]
        );
        return actualizar.affectedRows > 0;
    }
    async eliminarproyecto(id){
        let [eliminar] = await db.connect.query('DELETE FROM proyecto WHERE id = ?',        
        );
        return {mensaje:`proyecto con id ${id} eliminado`}
    }
    
}
module.exports = proyecto
