import { Router } from "express";
import { Todo } from "../model/index.js";
import { statusObjOpen } from "../helpers/ejs-index.js";
import { statusObjProcess } from "../helpers/ejs-index.js";
import { statusObjDone } from "../helpers/ejs-index.js";
import { limitBanner } from "../helpers/ejs-index.js";
import { editarea } from "../helpers/ejs.edit.js";
import { RegistUser } from "../model/registuser.js";
import { initialize } from "../config/passport.js"
import passport from "passport";
import { checkAuthentication } from "../MIddleware/checkAuth.js";
import { Imagecollection } from "../model/Avatar.js";







const router = Router(); 


//------------------------------------------------------------------------
//  The get method renders the mainpage on 
// -----------------------------------------------------------------------

router.get("/", checkAuthentication,  async (req,res) => {
    
    const userData = await req.user
    const imgData = await Imagecollection.findOne().exec()
    const todos = await Todo.find().exec();
    
    try{
       
        res.render('index', {
           page: 'page1', 
           nameobj: userData.name,
           todos: todos,
           imgD: imgData,
           statusObjOpen: statusObjOpen,
           statusObjProcess: statusObjProcess,
           statusObjDone: statusObjDone, 
           limitBanner: limitBanner, 
           editarea:editarea, 
           
           
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
  
    let to_date = req.body.Date
    let to_task = req.body.task
    let to_status = req.body.statustype
    
  
    const todo = new Todo(
        {
        Date: to_date, 
        task: to_task, 
        statustype: to_status

    })
    await Todo.find({})
        .then(countodo => {
            if(countodo.length < 15) {
                 todo.save()
                 console.log(countodo.length)
            }
        })
 
    console.log("test");
    res.redirect('/')
})


router.delete("/logout", function(req, res, next) {
    req.logout(function(err) {
      if (err) { return next(err); }
      res.redirect("/");
    });
  });


export default router