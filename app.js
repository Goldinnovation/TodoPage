import express from "express";
import { PORT } from "./config/app.js"
import { db } from "./config/database.js"
import mainpage from "./controller/index.js"
import editPage from "./controller/edit.js"
import { Todo } from "./model/index.js";
import accountPage from "./controller/account.js"
import signUpPage from "./controller/sign-up.js"
import loginPage from "./controller/login.js"



const app = express();

app.listen(PORT, () => {
    console.log(`The Server starts by PORT ${PORT}`)
})



app.use('/public',express.static('public'))
app.use(express.urlencoded({extended:true}))
app.set('view engine', 'ejs')
app.use(mainpage)
app.use(editPage)
app.use(accountPage)
app.use(signUpPage)
app.use(loginPage)
