let express = require('express');

let router = express.Router();
let post = require('../models/posts');

router.get('/',(req,res)=>{
    res.send('We are on post');
});


router.post('/',(req,res)=>{
    let yo = new post({
        title: req.body.title,
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