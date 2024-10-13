const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blogSchema = new mongoose.Schema({
  title:{
    type:String,
    require:true,
  },
  body:{
    type: String,
    require:true,

  },
  coverImageURL: {
    type:String,
    require:false,
  },
  createdBy :{
    type:Schema.Types.ObjectId,
    ref:"user",
   }
},{timestamps:true});



const Blog = mongoose.model("blog", blogSchema);



module.exports = Blog;