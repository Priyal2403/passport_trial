const router = require("express").Router();
const passport = require("passport");

router.get("/google", passport.authenticate("google",{scope:["profile","email"]}));

router.get("/google/redirect",passport.authenticate("google"),(req,res)=>{
    if(req.session.returnTo){
          let newPath = req.session.returnTo;
          req.session.returnTo ="";
          res.redirect(newPath)
    }else{
          res.redirect("/profile")
    }
})
module.exports = router;