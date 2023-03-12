import { Router } from "express";
import passport from "passport";
import flash from "express-flash";
import session from "express-session";
import { db } from "../config/database.js";
import MongoStore from "connect-mongo";
import "dotenv/config";
import { initialize } from "../config/passport.js";
import { RegistUser } from "../model/registuser.js";



const router = Router(); 
const initializePassport = initialize


initializePassport(
    passport, 
    logemail => RegistUser.findOne({email: logemail}), 
    id => RegistUser.findOne({_id: id})

   
)






router.use(session({
    secret: process.env.SECRET, 
    resave:false, 
    saveUninitialized: true, 
    store: MongoStore.create(db), 
    cookie: {
        maxAge: 1000 * 60 *60 *24 
         
    },
    ttl: 14 * 24 * 60 * 60, 
    autoRemove: 'native'
    // crypto: {
    //     secret: 'squirrel'
    // }

}))



router.use(flash())
router.use(passport.initialize())
router.use(passport.session())


// -------------------------------------------------
// Login btn

router.get("/login", (req,res) => {
    
    res.render("login")
})

router.post('/login',passport.authenticate('local', {
   
    successRedirect:'/',
    failureRedirect: '/login',
    failureFlash: true
}
) ) 



export default router