"use strict"

const express = require('express');
const res = require('express/lib/response');
const app = express();

app.listen(3031, () => {
    try {
        console.log("Servidor conectado em localhost:3031")
    } catch (error) {
        res.status(404).json({ error: "Erro ao conectar: " + error })
    }
});