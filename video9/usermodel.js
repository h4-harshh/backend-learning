const mongoose=require('mongoose');

//mongoose connection--->database creation
mongoose.connect(`mongodb://127.0.0.1:27017/mongopractice`);

//creating schema which is the details of a user
const userSchema=mongoose.Schema({
    name:String,
    username:String,
    email:String
})




module.exports=mongoose.model("user",userSchema);
//exports is a property