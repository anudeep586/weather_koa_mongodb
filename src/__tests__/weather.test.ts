import { data } from '../data'
import app  from '../server'
import {getWDByCityService} from '../weatherService'

const request = require('supertest');

describe('Weather data', () => {
    it("get  weather data by City Name", async () => {
        const res = await request(app.callback()).get(`/weather/New Delhi`)

        expect(res.status).toBe(200)
    })
    it("add weather data", async () => {
        const res = await request(app.callback()).post(`/weather/New Delhi`)

        expect(res.status).toBe(200)
    })
})