const express = require("express");

const app = express();

// app.use(express.json())

const bodyJSON = express.json();

app.post("/login", bodyJSON, (req, res)=>{
    console.log(req.body)
});

const port = process.env.PORT || 3000;

app.listen(port)