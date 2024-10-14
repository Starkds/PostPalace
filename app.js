require("dotenv").config();
const express = require('express'); 
const mongoose = require("mongoose");
const userRoute = require('./routes/user.route.js');
const Blog = require("./model/blog.model.js")
const addblogRoute = require('./routes/addblog.route.js');
const cookieParser = require('cookie-parser');
const app = express();
const PORT =  process.env.PORT  || 5000 || 6000 || 7000 ;
const path = require("path");
const { checkForAuthenticationCookie } = require('./middlewares/authentication.js');


mongoose.connect(process.env.MONGO_URL) 
.then((e) => console.log("mongodb connected successfully"));

app.set('view engine', "ejs");
app.set("views",path.resolve('./views'));
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.use(checkForAuthenticationCookie("token"))
app.use(express.static(path.resolve('./public')))

app.get('/', async (req,res)=>{

   const allBlogs = await Blog.find({});
    
    res.render('home',{
            user: req.user,  
            blogs: allBlogs,
    });
})
app.use('/blog', addblogRoute); 
app.use('/user', userRoute);
app.listen(PORT,() => console.log(`mongodb server started successfully : ${PORT}`));