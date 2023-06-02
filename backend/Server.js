const app = require('./App');
const dotenv =require('dotenv');
const createDatabase = require('./config/database');
const path= require('path');

dotenv.config({path:path.join(__dirname,'./config/config.env')})


createDatabase();

app.listen(process.env.PORT, ()=> {
    console.log(`SERVER IS RUNNING TO PORT: ${process.env.PORT} in ${process.env.NODE_ENV} `)
})
