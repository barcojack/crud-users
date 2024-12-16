// Importar las librerías y módulos necesarios para desplegar el servidor
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import path from 'path';
import userRoutes from './routes/userRoutes';


// Crear una instancia de la aplicación Express
const app = express();

// Middleware para manejar los CORS y intercambiar los datos con las solicitudes
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());


// Configurar la carpeta de archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));


// Usar las rutas para las peticiones
//Ejemplo: http://localhost:3000/api/users/:id
app.use('/api', userRoutes);

// Ruta para especificar el archivo principal del frontend
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Iniciar el servidor en el puerto 3000
app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});
