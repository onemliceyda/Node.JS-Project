const mongoose = require('mongoose');
 
const Post=require('./models/Post')

mongoose.connect('mongodb://127.0.0.1/nodeblog_test_db',
{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

Post.findByIdAndDelete('620a3d591794d61af2f9db87',(error,post)=>{
    console.log(error,post)
})

/*Post.findById('620a3d591794d61af2f9db87',(error,post)=>{
    console.log(error,post)
}) */

/*Post.findByIdAndUpdate('620a3d591794d61af2f9db87',{
title:"Benim ilk postum"
},(error,post)=> {
    console.log(error,post)
})

Post.find({},(error,post)=> {
    console.log(error,post);
}) */

/*Post.create(
    {
        title:"Second Post Title",
        content:"Second Post content,lorem ipsum text",
        
    },(error,post)=>{
        console.log(error,post)
    }) */