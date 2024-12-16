"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//importar las librerias necesarias para la conexion pg
const pg_1 = require("pg");
const pool = new pg_1.Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'crud-users',
    password: '!Camila15',
    port: 5432, // o el puerto que estés utilizando
});
exports.default = pool;
