import mongoose from "mongoose";


mongoose.set('strictQuery', true)
mongoose.connect(process.env.MONGODB_URI|| "mongodb://127.0.0.1:27017/TodoPage")
.then(()=> console.log('Database is connected'))
.catch(error => console.log(error))

export const db = mongoose.connection