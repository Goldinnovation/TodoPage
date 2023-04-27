export const pwcheck = (req,res,next) => {
   
   //  Password input check field: checks if there are special characters, big and small letters.
   
     let pw  = req.body.password
     var specialCheck = pw.match(/[^a-zA-Z0-9]/) ? true : false; 
     if(specialCheck) {
        return next()
     }else{  
         req.flash('errorM', 
         "Password requirements incorrect :(  ")
         
         res.redirect("/sign-up")     
     }    
}
