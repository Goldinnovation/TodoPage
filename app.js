import express from "express";
import { db } from "./config/database.js"
import 'dotenv/config';
import mainpage from "./controller/index.js"
import editPage from "./controller/edit.js"
import { Todo } from "./model/index.js";
import accountPage from "./controller/account.js"
import signUpPage from "./controller/register.js"
import loginPage from "./controller/login.js"
import flash from "express-flash";
import session from "express-session";
import passport from "passport";
import MongoStore from "connect-mongo";
import methodOverride from 'method-override'
import upladimage from './controller/Avatar.js'


// Rendering and connection area for the application 



const app = express();
const port = 3000; 


app.listen(process.env.PORT || port , () => {
    console.log(`The Server starts by PORT ${port}`)
})



app.use('/public',express.static('public'))
app.use(express.urlencoded({extended:true}))
app.set('view engine', 'ejs')
app.use(session({
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

app.use(flash())
app.use(passport.initialize())
app.use(passport.session())
app.use(methodOverride('_method'))

app.use(mainpage)
app.use(editPage)
app.use(accountPage)
app.use(signUpPage)
app.use(loginPage)
app.use(upladimage)

