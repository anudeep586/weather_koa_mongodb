import { Schema, model } from 'mongoose';


interface Iweather {
    id: string,
    cityName: string,
    country: string,
    temp_c: string,
    temp_f: string,
    humidity: string,
    wind_mph: string
}

const schema = new Schema<Iweather>({
    id: { type: String, required: true },
    cityName: { type: String, required: true },
    country: { type: String, required: true },
    temp_c: { type: String, required: true },
    temp_f: { type: String, required: true },
    humidity: { type: String, required: true },
    wind_mph: { type: String, required: true },
  });


const weatherModel=model<Iweather>('weatherData',schema)

export default weatherModel;