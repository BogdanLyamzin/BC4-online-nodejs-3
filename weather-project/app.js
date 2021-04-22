const express = require("express");
const axios = require("axios");
const cors = require("cors");

require("dotenv").config();

const app = express();

app.use(cors());

const {weatherAPI, weatherURL} = require("./configs/weather");

app.get("/", (req, res, next)=> {
    res.send("<h1>Добро пожаловать на наш сервис погоды!</h1>");
});

app.get("/weather", async (req, res, next)=>{
    const {city} = req.query;
    try {
        const {data} = await axios.get(weatherURL, {
            params: {
                q: city,
                appid: weatherAPI
            }
        });
        res.json({
            status: "success",
            code: 200,
            data: {
                data
            }
        })
    }
    catch(error) {
        next(error);
    }
});

const port = process.env.PORT || 3000;

app.listen(port)