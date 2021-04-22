require("dotenv").config();

module.exports = {
    weatherAPI: process.env.WEATHER_API_KEY,
    weatherURL: "https://api.openweathermap.org/data/2.5/weather"
}