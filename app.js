const pruebasRouter = require('./routes/pruebaRoutes');
const testerRouter = require('./routes/testerRoutes');
const proyectoRouter = require('./routes/proyectoRoutes');
const {config} = require('dotenv');
const express = require('express');
const app = express();
require("dotenv").config()
app.use(express.json());
const port = process.env.port;


app.use('/api/pruebas', pruebasRouter);
app.use('/api/proyecto', proyectoRouter)
app.use('/api/tester', testerRouter);



app.listen(port,() => {
    console.log(`Server running at http://localhost:${port}`);
});