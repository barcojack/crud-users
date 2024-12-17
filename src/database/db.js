"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//importar las librerias necesarias para la conexion pg
const pg_1 = require("pg");
const pool = new pg_1.Pool({
  user: 'yate',
  host: 'dpg-ctg056jgbbvc73dhr09g-a.oregon-postgres.render.com',
  database: 'basededatos_bn5o',
  password: 'yl69ENvCHKI7RUGnNZ9RbG6TCCWD0dtd',
    port: 5432, // o el puerto que estés utilizando
});
exports.default = pool;
