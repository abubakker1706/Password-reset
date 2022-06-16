const express = require('express');

const mongoose= require('mongoose');
const PORT = 5001;
const app = express()
const cors = require('cors')
const router = require('./Router/User')
const dotenv = require('dotenv');






dotenv.config();
app.use(express.json());
app.use(cors())
app.get('/',(req,res)=>{
                         res.send('hello world')
});
app.use('/api',router)

mongoose.connect(process.env.Mongo_url,{
 useNewUrlParser: true,

})
.then(()=>console.log('connected to db'))
.catch((err)=>console.log(err))
app.listen(5001,()=>{console.log('listening on port 5001')});



                      


