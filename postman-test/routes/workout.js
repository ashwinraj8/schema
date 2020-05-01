let express = require('express');

let router = express.Router();
let post = require('../models/workout');

router.get('/',(req,res)=>{
    res.send('On workout');
});



router.post('/',(req,res)=>{
    let yo = new post({
        equip: req.body.equip,
        level: req.body.level
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

router.get('/specific',(req,res)=>{
    res.send('This is workout specific area DAMMM!.');
})


module.exports = router;