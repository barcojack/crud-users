"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.createUser = exports.getUsers = void 0;
const db_1 = __importDefault(require("../database/db"));
//obtener todos los usuarios
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield db_1.default.query('SELECT * FROM users'); //consultar todos los usuarios
        res.json(result.rows); //envie y muestre los usuarios como respuesta
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: ' error al obtener todos los usuarios' });
    }
});
exports.getUsers = getUsers;
//crear un nuevo usuario
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email } = req.body; //obtener datos del cuerpo de la solicitud
    try {
        yield db_1.default.query('INSERT INTO users ( name, email) VALUES ($1, $2)', [name, email]); //insertar un formulario
        res.json({ message: 'usuario creado' });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'error al crear un usuario' });
    }
});
exports.createUser = createUser;
//actualizar el usuario
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { name, email } = req.body;
    try {
        //actualizar el usuario en la base de datos
        const result = yield db_1.default.query('UPDATE users SET NAME= $1, EMAIL = $2, WHERE id = $3 RETURNING', [name, email, id]);
        const updateUser = result.rows[0]; //obtiene el usuario con los datos que se actualizo
        //decuelve el usuario actualizado en la respuesta
        res.json(updateUser);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'error al actulizar el usuario' });
    }
});
exports.updateUser = updateUser;
//eliminar el usuario 
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params; //obtener el id del usuario con sus datos
    try {
        yield db_1.default.query('DELETE FROM users WHERE id = $1', [id]); // eliminar un usuario por id
        res.json({ message: 'usuario eliminado exitosamente' });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'error al eliminar un usuario' });
    }
});
exports.deleteUser = deleteUser;
