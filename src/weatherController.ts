import {  v4 as uuidv4 } from "uuid";
import weatherModel from "./models/weather";
import { getWDByCityService } from "./weatherService";


const axios = require("axios");


export const addWeatherDetails = async (ctx: any) => {
    try {
        const city=ctx.request.params.city;
        const ApiKey = '412a8367b25c43da9cb71348220907'
        let weatherdata = await axios.get(`http://api.weatherapi.com/v1/current.json`, {
            params: { key: `${ApiKey}`, q: `${city}`, aqi: 'no' },
        })
        let data = weatherdata.data
        const user=await weatherModel.create({ id: uuidv4(), cityName: data.location.name, country: data.location.country, temp_c: data.current.temp_c, temp_f: data.current.temp_f, humidity: data.current.humidity, wind_mph: data.current.wind_mph })
        ctx.body = user
    }
    catch (err) {
        ctx.body = "Not Found"
        ctx.status = 400
    }

}

export const getWeatherDetailsByCity = async (ctx: any) => {
    try {
        const city=ctx.request.params.city
        const data=await getWDByCityService(city)
        ctx.body = data
    }
    catch (err) {
        ctx.body = "Not Found"
        ctx.status = 400
    }
}


const weatherrun = () => {
    setTimeout(async () => {
        const ApiKey = '412a8367b25c43da9cb71348220907'
        let weatherdata = await axios.get(`http://api.weatherapi.com/v1/current.json`, {
            params: { key: `${ApiKey}`, q: `${'London'}`, aqi: 'no' },
        })
        let data = weatherdata.data
        await weatherModel.create({ id: uuidv4(), cityName: data.location.name, country: data.location.country, temp_c: data.current.temp_c, temp_f: data.current.temp_f, humidity: data.current.humidity, wind_mph: data.current.wind_mph })
        weatherrun()
    }, 60000)
}
weatherrun()
