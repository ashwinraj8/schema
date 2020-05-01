let express = require('express');
let mongoose = require('mongoose');
let app = express();
let bodyParser = require('body-parser');

app.use(bodyParser.json());


//Import routes

let postsRoute = require('./routes/posts');
let userRoute = require('./routes/users');
let workRoute = require('./routes/workout');


app.use('/posts',postsRoute);
app.use('/users',userRoute);
app.use('/workout',workRoute);



app.get('/',(req,res)=>{
    res.send('We are on home');
})

mongoose.connect('mongodb://localhost/shop', {useNewUrlParser: true, useUnifiedTopology: true})




app.listen(3000);