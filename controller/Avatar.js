import { Router } from "express";
import multer from "multer";
import { Imagecollection } from "../model/Avatar.js";
import {dirname, join } from "path";  
import { fileURLToPath } from "url"; 


const router = Router()

//  created a path to the directory of the server 

const __dirname = dirname(fileURLToPath(import.meta.url)); 
const upload = multer({dest: join(__dirname, "uploadStack")});



// create the storage object 
var storage =  multer.diskStorage({
    
    destination: function(req, file,cb){
        cb(null, "./uploadStack")
    }, 
    filename: function(req, file, cb){
       
        cb(null, file.fieldname + "-" + Date.now( + ".jpeg/png"))
    }

})




 export var uploadfile = multer({storage: storage}).single('avatar'); 


const arr = []

router.post("/uploadimage", uploadfile, async(req,res) => {


    try{
        const fileMime = req.file.mimetype
        if((fileMime).split("/").pop() == "png" ||(fileMime).split("/").pop() == "jpg" 
        || (fileMime).split("/").pop() == "jpeg"){
            // create a path object
            var data = {
                path: req.file.originalname
            } 
            arr.push(data)
            await Imagecollection.insertMany([data])
        }
        else{
            res.send('invalid file')
        }
  
    } catch(e){
        console.log(e)
    }
   
    res.redirect('/')

})



export default router 
