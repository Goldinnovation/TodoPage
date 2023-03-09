import mongoose from "mongoose";


const userShema = new mongoose.Schema({
    email: {type:String, required:true }, 
    pw: {type:String, required:true}

})

export const User = new mongoose.model('User',userShema)