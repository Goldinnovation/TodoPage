import mongoose from "mongoose";

// -------------------------------------------------------------------
// Model of Sign up information 
// -------------------------------------------------------------------

const registUserShema = new mongoose.Schema({
    surname: {type: String}, 
    name: {type:String},
    email: {type:String}, 
    password: {type:String}
    
})


export const RegistUser = new mongoose.model('RegistUser',registUserShema)