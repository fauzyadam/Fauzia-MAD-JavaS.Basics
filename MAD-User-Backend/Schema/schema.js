  import mongoose from 'mongoose';
const {Schema, model} = mongoose;



const UserSchema = Schema({
    
    UserName:{
 FirstName:String,
 required: true,
},
 UserName:{
     LastName: String,
     required:true,
 },
        
dateOfBirth:{
Type: Date,
required:true
},

School:{
 Type: String,
 required: true,
}
})
const userModel = model('User' ,userSchema);
export default userModel;
