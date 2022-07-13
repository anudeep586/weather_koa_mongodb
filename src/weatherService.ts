import weatherModel from "./models/weather";



export const getWDByCityService=async(city:string)=>{
    const data1=await weatherModel.find({cityName:city})
    return data1
}