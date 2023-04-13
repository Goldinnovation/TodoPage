import mongoose from "mongoose";
import { MONGODB_URI } from "./app.js";

mongoose.set('strictQuery', true)
mongoose.connect(MONGODB_URI)
.then(()=> console.log('Database is connected'))
.catch(error => console.log(error))

export const db = mongoose.connection