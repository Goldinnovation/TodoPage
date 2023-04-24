import session from "express-session";
import MongoStore from "connect-mongo";
import { Router } from "express";
import { db } from "./database.js";



const router = Router(); 

router.use(session({
    secret: process.env.SECRET || process.env.SECRETKE , 
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


export default router