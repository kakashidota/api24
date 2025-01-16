const express = require("express");
const app = express();

const PORT = 3000;



app.get("/", (req, res) => {
    res.sendFile(__dirname + "/endpoints.html");
});


app.get("/contact", (req, res) => {
    res.send("Du kan nå oss på nr 073112911119");
});

app.get("/test", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.get("/fuckoff", (req, res) => {
    res.send("Your mom is so fat it takes 5 warlocks to summon her");
});


app.listen(PORT, () =>{
    console.log("API is up and running on port " + PORT);
});