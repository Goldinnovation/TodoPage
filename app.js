import express from "express";
import { PORT } from "./config/app.js"
import { db } from "./config/database.js"
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



const app = express();

app.listen(PORT, () => {
    console.log(`The Server starts by PORT ${PORT}`)
})



app.use('/public',express.static('public'))
app.use(express.urlencoded({extended:true}))
app.set('view engine', 'ejs')
app.use(session({
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

