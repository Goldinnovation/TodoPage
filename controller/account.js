import { Router } from "express";



const router = Router();





router.get("/domain", (req,res) => {
    
    res.render('account')
})

// render page of login/sign -up 

// -------------------------------------------------
// Login btn

router.get("/login", (req,res) => {
    
    res.render("login")
})


// -------------------------------------------------
// Sign up btn - redirect

router.get("/sign-up", (req,res) => {

    res.render("register")
})




export default router