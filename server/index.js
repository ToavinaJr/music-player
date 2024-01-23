// Importation de toutes les dependences necessaires
const dotEnvConf = require("dotenv").config();
const express = require("express");
const dbConnexion = require('./db');
const PORT = process.env.PORT || 8080;
const app = express();

dbConnexion();
app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:8080`);
});