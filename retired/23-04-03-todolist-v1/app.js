
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

port = 3000;

app.get("/", (req, res) => {
    

    let today = new Date();
    let currentDay = today.getDay();

    if (currentDay === 6 || currentDay === 1) {
        res.send("<h1>Yay it's the weekend!</h1>");
    } else {
        res.send("<h1>Boo! I have to work!</h1>");
    }



});







app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
