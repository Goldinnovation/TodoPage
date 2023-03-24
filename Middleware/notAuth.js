export const checkNotAuth = (req,res,next) => {
    //  checks if the user is authenticated
    if(req.isAuthenticated()){
        return res.redirect("/")
    }else{
        next()
    }
}