import { Router } from "express";
import bcrypt  from "bcrypt";
import { RegistUser } from "../model/registuser.js";
import { checkNotAuth } from "../Middleware/notAuth.js";
import { pwcheck } from "../Middleware/pwcheck.js";
import { checkmessage } from "../helpers/ejs-pwmessage.js";


const router = Router(); 



// -------------------------------------------------
// Sign up btn - redirect

router.get("/sign-up", checkNotAuth, (req,res) => {
    const errorM = req.flash('errorM')
    res.render("register", 
    {   errorM, 
        checkmessage:checkmessage
    
    }
    )
})




// --------------------------------------------------



router.post("/Sign-up-process", pwcheck, checkNotAuth, async(req,res) => {

    try{
        const hashedpw = await bcrypt.hash(req.body.password, 10)
        const registeduser = new RegistUser({
            surname: req.body.surname, 
            name: req.body.name, 
            email: req.body.email, 
            password: hashedpw
        })  
        await registeduser.save()
         res.redirect("/login")
    }
    catch{

        res.redirect("/sign-up")

    }
    


})

export default router

