"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Importar las librerías y módulos necesarios para desplegar el servidor
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const path_1 = __importDefault(require("path"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
// Crear una instancia de la aplicación Express
const app = (0, express_1.default)();
// Middleware para manejar los CORS y intercambiar los datos con las solicitudes
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
app.use(express_1.default.json());
// Configurar la carpeta de archivos estáticos
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
// Usar las rutas para las peticiones
//Ejemplo: http://localhost:3000/api/users/:id
app.use('/api', userRoutes_1.default);
// Ruta para especificar el archivo principal del frontend
app.get('/', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, 'public', 'index.html'));
});
// Iniciar el servidor en el puerto 3000
app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});
