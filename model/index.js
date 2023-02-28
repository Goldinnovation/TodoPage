import mongoose from "mongoose";

// -------------------------------------------------------------------
// create the model of the input
// -------------------------------------------------------------------

const inputShema = new mongoose.Schema({
    Date: {type:Date, required: Date.now}, 
    task: {type: String}, 
    statustype: {type: String}

})

export const Todo = new mongoose.model('Todo',inputShema)
