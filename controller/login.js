import { Router } from "express";
import passport from "passport";
import "dotenv/config";
import { initialize } from "../config/passport.js";
import { RegistUser } from "../model/registuser.js";
import { checkNotAuth } from "../Middleware/notAuth.js";


const router = Router(); 
const initializePassport = initialize


initializePassport(
    passport, 
    logemail => RegistUser.findOne({email: logemail}), 
    id => RegistUser.findOne({_id: id})

   
)


// -------------------------------------------------
// Login btn

router.get("/login", checkNotAuth, (req,res) => {
    
    res.render("login")
})

router.post('/login',passport.authenticate('local', {
   
    successRedirect:'/',
    failureRedirect: '/login',
    failureFlash: true
}
) ) 




export default router