"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = require("../controllers/userController");
// Crear un nuevo Router
const router = (0, express_1.Router)();
// Definir las rutas del CRUD
router.get('/users', userController_1.getUsers); // Ruta para obtener usuarios
router.post('/users', userController_1.createUser); // Ruta para crear un usuario
router.put('/users/:id', userController_1.updateUser); // Ruta para actualizar un usuario
router.delete('/users/:id', userController_1.deleteUser); // Ruta para eliminar un usuario
// Exportar las rutas
exports.default = router;
