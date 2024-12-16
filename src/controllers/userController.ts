// importar la conexion a la base de datos
import { Request, Response } from "express";
import Pool from '../database/db';

//obtener todos los usuarios
export const getUsers = async (req: Request, res: Response) => {
    try { 
        const result = await Pool.query('SELECT * FROM users'); //consultar todos los usuarios
        res.json(result.rows); //envie y muestre los usuarios como respuesta
    } catch(error){
        console.error(error);
        res.status(500).json ({error: ' error al obtener todos los usuarios'});
    }
};


//crear un nuevo usuario
export const createUser = async (req:Request, res: Response) => {
    const { name, email} = req.body; //obtener datos del cuerpo de la solicitud
    try {
        await Pool.query('INSERT INTO users ( name, email) VALUES ($1, $2)' , [ name, email ]); //insertar un formulario
        res.json({ message: 'usuario creado'});
    }catch(error) {
        console.error(error);
        res.status(500).json({error: 'error al crear un usuario'});
    }
};
//actualizar el usuario
export const updateUser =async (req: Request, res: Response) => {
    const { id } = req.params;
    const { name, email } = req.body;
    try {
        //actualizar el usuario en la base de datos
        const result = await Pool.query('UPDATE users SET NAME= $1, EMAIL = $2, WHERE id = $3 RETURNING' , [name, email, id])
        const updateUser = result.rows[0]; //obtiene el usuario con los datos que se actualizo
        //decuelve el usuario actualizado en la respuesta
        res.json(updateUser);
    } catch(error) {
        console.error(error);
        res.status(500).json({error: 'error al actulizar el usuario'}) 

    }
};

//eliminar el usuario 
export const deleteUser = async (req: Request, res:Response) => {
    const { id } = req.params; //obtener el id del usuario con sus datos
    try {
        await Pool.query('DELETE FROM users WHERE id = $1', [id]); // eliminar un usuario por id
        res.json({ message: 'usuario eliminado exitosamente'})
    }  catch(error) {
        console.error(error);
        res.status(500).json({error: 'error al eliminar un usuario'});
    }
};