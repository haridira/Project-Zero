
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}))
// urlencoded is a special format used with html forms as per Angela (as opposed to json etc.)
// the extended option set to true seems to be required for body-parser to work

let port = 3000;

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {
    let num1 = Number(req.body.num1);
    let num2 = Number(req.body.num2);

    let result = num1 + num2;

    res.send(`And the resulting number is: ${result}`);
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
