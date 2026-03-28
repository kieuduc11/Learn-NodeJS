const { log } = require("console");
const express = require("express");
const app = express();
const PORT = 8080;

app.get("/", (req, res) => {
    res.send("Hello world");
});

app.listen(PORT, () => {
    console.log("This app is running on port: " + PORT);
});
