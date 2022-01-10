import mongoose from 'mongoose';
const {Schema, model} = mongoose;




// Destructuring

const UserSchema = Schema({
    userName:{ 
FirstName: Fauziatu,
LastName: Iddrisu,
requred:true
    },
DateOfBirth:{
Number: 13/04/1988,
required:true
},

School:{
    NameOfSchool: "Hive Academy",
}
})
const zakModel = model('Zak',ZakSchema);
export default zakModel;
