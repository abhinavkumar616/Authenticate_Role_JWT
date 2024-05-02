const express=require("express")
const morgan= require('morgan')
const dotenv = require("dotenv");

dotenv.config();

require("./config/dbConnect")
const route=require("./routes/route")
const app=express()
app.use(express.json())

app.use(morgan('dev'))

app.use("/",route)

const PORT = process.env.PORT

app.listen(PORT,()=>{
    console.log(`Serever is running on port ${PORT} `);
})
