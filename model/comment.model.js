const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const commentSchema = new mongoose.Schema({
  content:{
    type: String,
    require:true,
  },
  blogId:{
    type: Schema.Types.ObjectId,
    ref: "blog",
  },
  createdBy:{
    type : Schema.Types.ObjectId,
    ref : "user",
  }
},{timestamps:true});


const Comment = mongoose.model("comment", commentSchema);


module.exports = Comment;

