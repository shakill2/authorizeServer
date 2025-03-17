const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use((req, res) => {
    res.status(401).json({ error: "Unauthorized" });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
