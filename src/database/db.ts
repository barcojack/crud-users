//importar las librerias necesarias para la conexion pg
import { Pool } from 'pg';

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'crud-users',
  password: '!Camila15',
  port: 5432, // o el puerto que estés utilizando
});

export default pool;
