import { Router } from "express";
import multer from "multer";
import { Imagecollection } from "../model/Avatar.js";
import {dirname, join } from "path";  
import { fileURLToPath } from "url"; 


const router = Router()

//  created a path to the directory of the server 

const __dirname = dirname(fileURLToPath(import.meta.url)); 
const upload = multer({dest: join(__dirname, "uploadStack")});



// creates the storage object(Folder where the image are uploaded and stored) 
var storage =  multer.diskStorage({
    
    destination: function(req, file,cb){
        cb(null, "./public/uploadStack")
    }, 
    filename: function(req, file, cb){
        
        cb(null, file.originalname)
    }

})




 export var uploadfile = multer({storage: storage}).single('avatar'); 




router.post("/uploadimage", uploadfile, async(req,res) => {

    const userData = await req.user
    
    try{
        const fileMime = req.file.mimetype
        if((fileMime).split("/").pop() == "png" ||(fileMime).split("/").pop() == "jpg" 
        || (fileMime).split("/").pop() == "jpeg"){
            // create a path object
            var data = {
                path: req.file.originalname,
                userid: userData._id
            } 
          
          
                await Imagecollection.insertMany([data])
          
            
        }
        else{
            res.send('invalid file')
        }
  
    } catch(e){
        console.log(e)
    }
   
    req.flash('NoCap', "no space left for more image")
    res.redirect('/')

})



export default router 
