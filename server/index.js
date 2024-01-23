// Importation de toutes les dependences necessaires
const dotEnvConf = require("dotenv").config();
const express = require("express");
const dbConnexion = require('./db');
const PORT = process.env.PORT || 8080;
const app = express();

const server = require('http');
server.createServer((req, res) => {
    res.write("hoola");
    res.end();
});
app.listen(PORT, ()=> {
    console.log("Server runing on the port 8080");
});
// dbConnexion();
