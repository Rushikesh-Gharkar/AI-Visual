import mongoose from 'mongoose'
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email : {type : String , unique : true , required : true , trim:true , lowercase:true},
    password : {type:String , minlength:5 , required : true},
    username : {type:String , required:true , trim : true},
    prompts: [
        {
            type : Schema.Types.ObjectId,
            ref : 'Prompt',
        }
    ],
},
{
    timestamps : true
}
)

const User = mongoose.model('User' , UserSchema)

export default User;
