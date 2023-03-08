import session from "express-session";
import { db } from "../config/database.js";
import { Router } from "express";
import MongoStore from "connect-mongo";




const router = Router();




router.use(session({
    secret: 'some secret', 
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

router.get('/',(req,res,next) => {
    req.session.user = {
        uuid: '12234-2345-2323423'
    } //THIS SETS AN OBJECT - 'USER'
    req.session.save(err => {
        if(err){console.log(err); 
        } else {
            res.send(req.session.user) 

        }
    });
})




export default router