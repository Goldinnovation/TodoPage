export const checkAuthentication = (req,res,next) => {
    //  checks if the user is authenticated
    if(req.isAuthenticated()){
        return next()
    }else{
        res.redirect('/login')
    }
}



