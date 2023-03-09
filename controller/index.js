import { Router } from "express";
import { Todo } from "../model/index.js";
import { statusObjOpen } from "../helpers/ejs-index.js";
import { statusObjProcess } from "../helpers/ejs-index.js";
import { statusObjDone } from "../helpers/ejs-index.js";
import { limitBanner } from "../helpers/ejs-index.js";
import { editarea } from "../helpers/ejs.edit.js";
import session from "express-session";
import { db } from "../config/database.js";
import MongoStore from "connect-mongo";
import "dotenv/config";


const router = Router(); 



router.use(session({
    secret: process.env.SECRET, 
    resave:false, 
    saveUninitialized: true, 
    store: MongoStore.create(db), 
    cookie: {
        maxAge: 1000 * 60 *60 *24 
         
    },
    ttl: 14 * 24 * 60 * 60, 
    autoRemove: 'native'
    // crypto: {
    //     secret: 'squirrel'
    // }

}))


//------------------------------------------------------------------------
//  The get method renders the mainpage on 
// -----------------------------------------------------------------------

router.get("/",  async (req,res) => {
    
  
    try{
        
        const todos = await Todo.find().exec();
        
        res.render('index', {
           page: 'page1',
           todos: todos,
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
            if(countodo.length < 15) {
                 todo.save()
                 console.log(countodo.length)
            }
        })
 
    console.log("test");
    res.redirect('/')
})

router.get('/input/:id', async (req,res) => {
    try{
        const id = req.params.id
        
        const todos = await Todo.find().exec();
        const todosup = await Todo.findOne({_id: id}).exec()
      
        res.render('index',{
            page: 'page2',
            todos:todos,
            todosup: todosup,
            statusObjOpen: statusObjOpen,
            statusObjProcess: statusObjProcess,
            statusObjDone: statusObjDone, 
            limitBanner: limitBanner,
            editarea:editarea
        })

    } catch(error){
        console.error(error)
        res.status(404)
    }
})



export default router