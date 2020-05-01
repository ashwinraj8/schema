let express = require('express');

let router = express.Router();
let post = require('../models/user');


router.post('/',(req,res)=>{
    let yo = new post({
        desc: req.body.desc,
        //desc: req.body.desc
    })
    yo.save()
    .then(result=>{
        res.json(result);
        console.log(result);
    })
    .catch(err=>{
        console.log(err);
    })
    
   
})


module.exports = router;