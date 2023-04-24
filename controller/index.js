import { Router } from "express";
import { Todo } from "../model/index.js";
import { statusObjOpen } from "../helpers/ejs-index.js";
import { statusObjProcess } from "../helpers/ejs-index.js";
import { statusObjDone } from "../helpers/ejs-index.js";
import { limitBanner } from "../helpers/ejs-index.js";
import { editarea } from "../helpers/ejs.edit.js";
import { checkAuthentication } from "../Middleware/checkAuth.js";
import { Imagecollection } from "../model/Avatar.js";
import { checkProfImg } from "../helpers/ejs-img.js";







const router = Router(); 


//------------------------------------------------------------------------
//  Get method renders the mainpage on 
// -----------------------------------------------------------------------

router.get("/", checkAuthentication, async (req,res) => {
    
    const userData = await req.user
    const todos = await Todo.find({userid: userData._id}).exec();
    const imgData = await Imagecollection.find({userid: userData._id}).exec();
  

     
   
    try{

      
     
        res.render('index', {
           page: 'page1', 
           nameobj: userData.name,
           todos: todos,
           imgD: imgData,
           checkProfImg: checkProfImg,
           statusObjOpen: statusObjOpen,
           statusObjProcess: statusObjProcess,
           statusObjDone: statusObjDone, 
           limitBanner: limitBanner, 
           editarea:editarea
           
           
        })
        
    } catch(error) {
        res.render('index',{
            Date: null
        })
    }

})

//------------------------------------------------------------------------
//  By clicking the buttom the user can create to todo task obejct which 
//  is saved in the database
// -----------------------------------------------------------------------


router.post('/',  async (req,res) => {
    
    const userData = await req.user
    let userid = userData._id
    let to_date = req.body.Date
    let to_task = req.body.task
    let to_status = req.body.statustype
    
  
    const todo = new Todo(
        {
        Date: to_date, 
        task: to_task, 
        statustype: to_status, 
        userid: userid
        
        
        
        

    })
    await Todo.find({})
        .then(countodo => {
            if(countodo.length < 15) {
                 todo.save()
                 
            }
        })

    res.redirect('/')
})


router.delete("/logout", function(req, res, next) {
    req.logout(function(err) {
      if (err) { return next(err); }
      res.redirect("/");
    });
  });


export default router