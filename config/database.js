import mongoose from "mongoose";
import { MONGODB_URIKEY } from "./app.js";

//  connecting with the database 

mongoose.set('strictQuery', true)
mongoose.connect(process.env.MONGODB_URI || MONGODB_URIKEY)
.then(()=> console.log('Database is connected'))
.catch(error => console.log(error))

export const db = mongoose.connection