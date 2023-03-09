import { Router } from "express";



const router = Router();





router.get("/domain", (req,res) => {
    
    res.render('account')
})






export default router