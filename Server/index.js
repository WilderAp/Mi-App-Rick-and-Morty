
const express = require('express');
const server = express();
const PORT = '3001'
const morgan = require('morgan');
const router = require('./src/routes/index');

server.use(express.json());
server.use(morgan('dev'));

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
       'Access-Control-Allow-Headers',
       'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
       'Access-Control-Allow-Methods',
       'GET, POST, OPTIONS, PUT, DELETE'
    );
    next();
 }); //middleware

server.use("/rickandmorty", router);
// server.use("/users", router); // ejemplito


server.listen(PORT, () => console.log(`Server levantado en el puerto: ${PORT}`))


