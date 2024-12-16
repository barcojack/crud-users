import { Router } from 'express';
import { getUsers, createUser, updateUser, deleteUser } from '../controllers/userController';

// Crear un nuevo Router
const router = Router();

// Definir las rutas del CRUD
router.get('/users', getUsers); // Ruta para obtener usuarios
router.post('/users', createUser); // Ruta para crear un usuario
router.put('/users/:id', updateUser) // Ruta para actualizar un usuario
router.delete('/users/:id', deleteUser); // Ruta para eliminar un usuario

// Exportar las rutas
export default router;
