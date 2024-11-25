const db = require('../database/databse');

class proyecto{
    async listarproyecto(){
        let [lista] = await connect.query('SELECT * FROM proyeto');
        return lista;
    };
    async guardarproyectos(proyecto){
        let {id, nombreproyecto}= proyecto;
        console.log(proyecto)
        let [guardar] = await connect.query('insert into proyeto(nombre, decripcion) values'('?', '?'),
            [id, nombreproyecto]
        );
        return{id: guardar.insertid,...proyecto};
    }
    async actualizar(id, proyecto) {
        let { nombre, descripcion, fecha_inicio, fecha_fin } = proyecto;
        let [result] = await conn.query(
            'UPDATE proyeto SET nombre = ?, descripcion = ? WHERE id_proyeto = ?',
            [nombre, descripcion, id]
        );
        return { id_proyecto: id, ...proyecto };
    }

    async eliminar(id) {
        let [result] = await conn.query('DELETE FROM proyecto WHERE id_proyeto = ?', [id]);
        return { message: 'Proyecto eliminado', id_proyecto: id };
    }
   }
    
module.exports = proyecto
