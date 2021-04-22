const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// app.use(bodyParser.json())

// const bodyJSON = bodyParser.json();

app.post("/login", bodyParser.json(), (req, res)=>{
    console.log(req.body)
});

const port = process.env.PORT || 3000;

app.listen(port)