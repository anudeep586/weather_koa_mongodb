import { data } from '../data'
import app  from '../server'
import {addWeatherDetailsService, getWDByCityService} from '../weatherService'

const request = require('supertest');

describe('Weather data', () => {
    let data:any;
    it("get  weather data by City Name", async () => {
        const res = await request(app.callback()).get(`/weather/New Delhi`)

        expect(res.status).toBe(200)
    })
    it("add weather data", async () => {
        const res = await request(app.callback()).post(`/weather/New Delhi`)

        expect(res.status).toBe(200)
    })
    it("unit testing on getting data", async() => {
        const res1 = await addWeatherDetailsService('New Delhi')

        const res = await getWDByCityService('New Delhi')
        console.log(res,res1,"cool")
        expect(res1).toEqual(expect.objectContaining({id:res.id}))
    })
})
