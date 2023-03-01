import { Router } from "express";
import { Todo } from "../model/index.js";
import { statusobj } from "../helpers/ejs-index.js";


const router = Router(); 


//------------------------------------------------------------------------
//  The get method renders the mainpage on 
// -----------------------------------------------------------------------

router.get("/",  async (req,res) => {
    try{
        
        const todos = await Todo.find().exec();
        
        res.render('index', {
           todos: todos,
           statusobj:statusobj  

        
           
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
    Todo.find({})
        .then(countodo => {
            if(countodo.length < 5) {
                 todo.save()
                 console.log(countodo.length)
            }
        })
 
    console.log("test");
    res.redirect('/')
})


export default router