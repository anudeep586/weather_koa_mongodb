import * as Koa from 'koa';
import * as Router from 'koa-router'
import logger=require('koa-logger');
import bodyparser=require('koa-bodyparser')
import { addWeatherDetails,getWeatherDetailsByCity } from './weatherController';
import {dbConn} from '../src/data/index';


const port=process.env.PORT || 8080

const app=new Koa();

dbConn()

const router=new Router();
app.use(logger());
app.use(bodyparser());

router.get('/weather/:city',getWeatherDetailsByCity)
router.post('/weather/:city',addWeatherDetails)

app.use(router.routes());
app.listen(port);

console.log(` My koa server is up and listening on port ${port}`)

export default app;
