import { Router } from "express";


const router = Router(); 



// -------------------------------------------------
// Login btn

router.get("/login", (req,res) => {
    
    res.render("login")
})


// ---------------------------------------------------------
router.get("/Acc-log", (req,res) => {

   
})


export default router