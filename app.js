const express = require("express");

const server = express();

server.get("/", (req,res) => {
    res.send("Hello from nodejs express!!");
});

server.listen(3000, () => {
    console.log("hello from console.!!!");
})
