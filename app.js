const testerRoutes=require('./routes/testerRoutes')
const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT;

app.use('./api/tester', testerRoutes)


app.listen(port, () =>{
    console.log("el servidor esta corriendo en el puerto", port)
})