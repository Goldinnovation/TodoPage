import { Router } from "express";
import bcrypt  from "bcrypt";
import { RegistUser } from "../model/registuser.js";
import { checkNotAuth } from "../Middleware/notAuth.js";


const router = Router(); 



// -------------------------------------------------
// Sign up btn - redirect

router.get("/sign-up", checkNotAuth, (req,res) => {

    res.render("register")
})




// --------------------------------------------------



router.post("/Sign-up-process", checkNotAuth, async(req,res) => {

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

