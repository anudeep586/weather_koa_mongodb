import { connect } from 'mongoose';

export const dbConn=()=>{
    const uri:string='mongodb://localhost/weather_data';
    const options={
        autoIndex:false,
        serverSelectionTimeoutMS:5000,
        socketTimeoutMS:45000,
        family:4
    }
    return connect(uri,options)
}
