const router = require("express").Router();

const authCheck = (req,res,next)=>{
     
    console.log(req.originalUrl)
    
    if(!req.isAuthenticated()){
         req.session.returnTo = req.originalUrl;
          res.redirect('/auth/login')    
    }else{
         next();
    }
}
router.get("/",authCheck,async(req,res)=>{
    res.render("profile",{user:req.user});
});
module.exports = router;