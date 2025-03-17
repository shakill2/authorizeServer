const express = require("express");
const app = express();

app.use((req, res) => {
    res.status(401).json({ error: "Unauthorized" });
});

module.exports = app; // Export instead of app.listen()
