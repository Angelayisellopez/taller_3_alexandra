const myql = require ('mysql2');
const dotenv = require('dotenv');

dotenv.config();

const pool = myql.createPool({
    host: process.env.BD_HOST,
    user: process.env.BD_USER,
    password: process.env.BD_PASSWORD,
    database: process.env.BD_NAME,
});
module.exports = pool.promise();