import mongoose from "mongoose";

const registUserShema = new mongoose.Schema({
    surname: {type: String}, 
    name: {type:String},
    email: {type:String}, 
    password: {type:String}
    
})


export const RegistUser = new mongoose.model('RegistUser',registUserShema)