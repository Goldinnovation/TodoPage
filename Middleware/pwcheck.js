export const pwcheck = (req,res,next) => {
   
   // input checkfield: allows  5 to 15 string with an alphabetiic number at the end
   
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
