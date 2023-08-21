
const express = require("express");
const app = express();

let port = 3000;

app.get("/", function(req, res) {
    res.send("<h1>Hello World!</h1>");
});

app.get("/about", function(req, res) {
    res.send("<h2>Hari's Page</h2>");
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});

