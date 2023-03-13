
export const checkAuthentication = (req,res,next) => {
    if(req.isAuthenticated()){
        console.log('yes')
        return next()
    }else{
        res.redirect('/login')
    }
}



