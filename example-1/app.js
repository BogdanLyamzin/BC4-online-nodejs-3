const express = require("express");

const products = require("./products");

const app = express();

app.get("/products", (req, res)=>{
    res.json(products);
    // res.send(products)
    // res.json(null)
    // res.json(undefined)
    // res.send(null)
    // res.send(undefined)
});

const port = process.env.PORT || 3000;

app.listen(port)