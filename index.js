import express from 'express'
import connectDb from './db.js';
import cookieParser from 'cookie-parser';
import userRouter from "./Routes/userRoutes.js"

const Port=4000
const app= express();
app.use(express.json())
app.use(cookieParser())
connectDb();

app.use("/user",userRouter)


app.listen(Port,()=>{
console.log(`server is lsiten on port ${Port} `)
})