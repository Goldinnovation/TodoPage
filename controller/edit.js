import { Router } from "express";
import { Todo } from "../model/index.js";
import router from "./index.js";



// ---------------------------------------------------------------------------
// Edit buttom = By pressing the buttom the client will be send to a different
//  webpage, to edit the stored information. 
// ---------------------------------------------------------------------------

router.get('/input/:id', async (req,res) => {
    try{
        const id = req.params.id
        const todos = await Todo.findOne({id: id}).exec()
      
        res.render('edit',{
            todos:todos
        })

    } catch(error){
        console.error(error)
        res.status(404)
    }
})

router.post("/input/:id", async (req,res) => {
    try{
        const id = req.params.id
        console.log(id)
        const todos = await Todo.findOneAndUpdate({id: id},
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
        const id = req.body.id
        await Todo.findOneAndDelete({id:id})
        res.redirect('/')

    }catch(error){
        console.error(error)
        res.send('404: Error')
    }
})

export default router