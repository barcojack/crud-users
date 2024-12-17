import { Request, Response } from 'express';
import pool from '../database/db'; // Asegúrate de usar 'pool' en lugar de 'Pool' si esa es la importación correcta

// Obtener todos los usuarios
export const getUsers = async (req: Request, res: Response) => {
    try {
        const result = await pool.query('SELECT * FROM users');
        res.json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener todos los usuarios' });
    }
};

// Crear un nuevo usuario
export const createUser = async (req: Request, res: Response) => {
    const { name, email } = req.body;
    try {
        await pool.query('INSERT INTO users (name, email) VALUES ($1, $2)', [name, email]);
        res.json({ message: 'Usuario creado' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al crear un usuario' });
    }
};

// Actualizar el usuario
export const updateUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { name, email } = req.body;
    try {
        const result = await pool.query('UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *', [name, email, id]);
        const updatedUser = result.rows[0];
        res.json(updatedUser);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al actualizar el usuario' });
    }
};

// Eliminar el usuario
export const deleteUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        await pool.query('DELETE FROM users WHERE id = $1', [id]);
        res.json({ message: 'Usuario eliminado exitosamente' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al eliminar un usuario' });
    }
};
