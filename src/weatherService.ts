import weatherModel from "./models/weather";
import {  v4 as uuidv4 } from "uuid";

const axios = require("axios");


export const getWDByCityService=async(city:string)=>{
    const data1=await weatherModel.find({cityName:city})
    return data1[data1.length-1]
}


export const addWeatherDetailsService=async(city:string)=>{
    const ApiKey = '412a8367b25c43da9cb71348220907'
        let weatherdata = await axios.get(`http://api.weatherapi.com/v1/current.json`, {
            params: { key: `${ApiKey}`, q: `${city}`, aqi: 'no' },
        })
        let data = weatherdata.data
        const user=await weatherModel.create({ id: uuidv4(), cityName: data.location.name, country: data.location.country, temp_c: data.current.temp_c, temp_f: data.current.temp_f, humidity: data.current.humidity, wind_mph: data.current.wind_mph })
        return user
}
// {
//     "id": "93854b51-38d7-4da6-b192-094e72be5452",
//     "cityName": "New Delhi",
//     "country": "India",
//     "temp_c": "35",
//     "temp_f": "95",
//     "humidity": "53",
//     "wind_mph": "10.5",
//     "_id": "62d16e6b6b2e48686051153b",
//     "__v": 0
// }
