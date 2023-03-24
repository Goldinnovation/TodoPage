import mongoose from "mongoose";

// -------------------------------------------------------------------
// Model of uploaded image 
// -------------------------------------------------------------------

const uploadShema =  new mongoose.Schema({
        path: {
            type: String, 
            required: true
        }, 
        userid: {type:String}

})


export const Imagecollection  = new mongoose.model('Imagecollection ', uploadShema)
