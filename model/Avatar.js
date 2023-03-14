import mongoose from "mongoose";


const uploadShema =  new mongoose.Schema({
        path: {
            type: String, 
            required: true
        }
})


export const Imagecollection  = new mongoose.model('Imagecollection ', uploadShema)
