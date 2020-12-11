const express = require('express');
const routes = require('../routes');
const bodyParser = require("body-parser");
var cors = require('cors')

const server = express();
server.use(express.json());

var corsOptions = {
    origin: "http://localhost:3001"
};

server.use(cors(corsOptions));
// parse requests of content-type - application/json
server.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
server.use(bodyParser.urlencoded({ extended: true }));
server.use('/api', routes);

module.exports = server;