import { Strategy as LocalStrategy } from 'passport-local';
import { db } from "./database.js";
import { User } from "../model/user.js";
import bcrypt  from "bcrypt";
import passport from 'passport';




export function initialize(passport, getUserbyEmail, getUserbyId){

    // creating an arrow function which acts as middleware for user authentication
    const authenticateUser = async (email, password, done) => {
        const user =  await getUserbyEmail(email)
        if(user == null){
            return done(null,false,{message: 'No user with that email'})
        }

        try{
            console.log(user)
            console.log(user.password)
            console.log(password)
            
         if (await bcrypt.compare(password, user.password)){
             return done(null, user)
         } else {
            return done(null,false, {message: 'Password is incorrect'})
         }
        } catch (e){
            return done(e)
        }
    } 
    // want to use that localstrategy with passport by taking the field email 
    // localStrategy allows use to email for logint
    passport.use(new LocalStrategy({usernameField: 'logemail'}, authenticateUser))
     
     passport.serializeUser((user, done) => done(null, user.id))
     passport.deserializeUser((id, done) => {
        return done(null, getUserbyId(id))
     })
}


