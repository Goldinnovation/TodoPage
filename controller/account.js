import { Router } from "express";



const router = Router();




// renders the domain Page 
router.get("/domain", (req,res) => {
    
    res.render('account')
})






export default router