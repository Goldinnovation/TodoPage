import { Imagecollection } from "../model/Avatar.js";


export const checkpic =  async(req,res,next ) => {
    
   console.log(req.body.profpic)
   next()
}