import { Router } from "express";

const router = Router(); 


// -------------------------------------------------
// Sign up btn - redirect

router.get("/sign-up", (req,res) => {

    res.render("register")
})




// --------------------------------------------------



router.get("/Sign-up-process", (req,res) => {

    

   


})

export default router

