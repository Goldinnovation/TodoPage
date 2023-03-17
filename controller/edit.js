import { Router } from "express";
import { Todo } from "../model/index.js";
import router from "./index.js";
import { statusObjDone } from "../helpers/ejs-index.js";
import { statusObjOpen } from "../helpers/ejs-index.js";
import { statusObjProcess } from "../helpers/ejs-index.js";
import { limitBanner } from "../helpers/ejs-index.js";
import { editarea } from "../helpers/ejs.edit.js";
import { Imagecollection } from "../model/Avatar.js";



// ---------------------------------------------------------------------------
// Edit buttom = By pressing the buttom the client will be send to a different
//  webpage, to edit the stored information. 
// ---------------------------------------------------------------------------

// router.get('/input/:id', async (req,res) => {
//     try{
//         const id = req.params.id
        
//         const todos = await Todo.findOne({id: id}).exec()
      
//         res.render('edit',{
//             todos:todos
//         })

//     } catch(error){
//         console.error(error)
//         res.status(404)
//     }
// })


router.get('/input/:id', async (req,res) => {
    const userData = await req.user
  

    try{
        const id = req.params.id
        const imgData = await Imagecollection.find().exec();
        const todos = await Todo.find().exec();
        const todosup = await Todo.findOne({_id: id}).exec()
    
        console.log(imgData)
        res.render('index',{
            page: 'page2',
            nameobj: userData.name,
            todos:todos,
            imgD: imgData,
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

router.post("/input/:id", async (req,res) => {
    try{
        const id = req.params.id
       
        const todosup = await Todo.findOneAndUpdate({_id: id},
            { task: req.body.task, 
             statustype: req.body.statustype
            }, {new: true} //we tell the model that we want the cariable to represent the new version of the cookie 
             )
       res.redirect('/')
    } catch(error){
        console.error(error)
        res.status(404)
    }
})


// ---------------------------------------------------------------------------
// Delete Buttom = By pressing the buttom the stroed information will be deleted
// from the database
// ---------------------------------------------------------------------------

router.get("/input/:id/delete", async (req,res) => {
    try{

        const id = req.params.id
        console.log(id)
        await Todo.findOneAndDelete({_id:id})
        res.redirect('/')
        
    }catch(error){
        console.error(error)
        res.send('404: Error')
    }
})

export default router