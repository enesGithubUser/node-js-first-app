const express = require("express");

const server = express();

const port = process.env.PORT || '5000';

server.get("/", (req,res) => {
    res.send("Hello from nodejs express!!");
});

server.listen(port, () => {
    console.log("hello from console.!!!");
})
