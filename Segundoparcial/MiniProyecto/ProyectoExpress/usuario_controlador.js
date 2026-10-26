const bcrypt = require('bcryptjs');

const usuariosModel = require('../Modelo/usuarios_modelo');

const { validarCorreo, validarBoleta, validarContrasena } = require('../validaciones');

function esDuplicado(error){
    return error.code === 'ER_DUP_ENTRY' || error.code ===
    '23505';
}

async function listarUsuarios(req, res) {
    try {
        const usuarios = await usuariosModel.listar();
        res.json(usuarios);
    } catch{
        res.status(500).json({error: error.message});
    }
}

async function obtenerUsuario(req, res) {
    try {
        const usuario = await usuariosModel.obtenerPorId(req.params.id);
        if (!usuario) return res.status(404).json({error: 'Usuario no encontrado'});
        res.json(usuario);
    } catch(error) {
        res.status(500).json({error: error.message});
    }
}

async function name(params) {
    
}

async function actualizarUsuario(req, res) {
    }
    const {nombre, correo, rol} = req.body;
     if(nombre === undefined && correo === undefined && rol === undefined){
    return res.status(400).json({error: 'Se debe de llenar almenos uno de los campos de nombre, correo o rol para actualizar los datos'});
}
if(correo !== undefined && !validarCorreo(correo)){
    return res.status(400).json({error : 'El correo no tiene un formato valido'});
}

//aqui mandan a llamar la funcion e nombre
try{
    const usuario = await usuariosModel.actualizar(req.params.
    id, {nombre, correo, rol});
    if(!usuario) return res.status(404).json({error :
    'Usuario no encontrado'});
    res.json(usuario);
}catch(error){
    if(esDuplicado(error)) return res.status(400).json({error
    : 'Ya existe un usuario con ese correo'});
    res.status(500).json({error : error.message});
}

async function eliminarUsuario(req, res) {
    try{
        const eliminado = await usuariosModel.eliminar(req.params.
        id);
        if (!eliminado) return res.status(404).json({error: 'No se encontro al usuario'});
        res.status(204).send();
    }catch(error){
        res.status(500).json({error : error.message});
    }
}

module.exports = {listarUsuarios,obtenerUsuario,crearUsuario,actualizarUsuario,eliminarUsuario}