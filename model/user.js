import mongoose from "mongoose";


const userShema = new mongoose.Schema({
    logemail: {type:String}, 
    password: {type:String}

})

export const User = new mongoose.model('User',userShema)