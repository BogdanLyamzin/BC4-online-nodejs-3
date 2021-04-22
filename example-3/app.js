const express = require("express");

const products = require("./products");

const app = express();

app.get("/products", (req, res)=>{
    const {priceFrom, priceTo} = req.query;
    const results = products.filter(({price}) => (price <= priceTo && price >= priceFrom))
    res.json({
        status: "success",
        code: 200,
        data: {
            results
        }
    });
});

const port = process.env.PORT || 3000;

app.listen(port)