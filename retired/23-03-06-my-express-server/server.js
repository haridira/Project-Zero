
const express = require("express");
const app = express();

let port = 3000;

app.get("/", function(request, response) {
    console.log(request);
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});

