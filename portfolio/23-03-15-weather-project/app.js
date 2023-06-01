
const express = require("express");
const https = require("https");

const app = express();

url = "https://api.openweathermap.org/data/2.5/weather?lat=42.3601&lon=71.0589&appid=f78715abc02e610676ac042f4d6ed3d9&units=metric";

app.get("/", (req, res) => {

    https.get(url, (response) => {
        console.log(response.statusCode);
    });

    res.send("Server is up and running..");
});

port = 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
