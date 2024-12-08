const express = require('express');
const app = express();
const PORT = 4000;
app.get("/health", (req, res) => {
    res.send("Server is running")
})
app.listen (PORT , (req, res) => {
    console.log (`Server is running:${PORT}`)
})