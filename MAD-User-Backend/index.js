import dotenv from 'dotenv';
import express from 'express';
import userModel from './Schema/schema.js';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();
dotenv.config();
const PORT = 3000
//middleware
app.use(cors());
app.use(express.json());

const PORT = 3000 || process.env.PORT;

const db = process.env.DB_URL;
mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,

})
.then(() => console.log('Connected to DB'))
.catch(err => console.log(err));

app.get('/',(req, res) =>{
    res.json({
        message: 'Welcome to users backend API'
    })
})
// Get all users
app.get('/users',async(req, res) =>{

const allusers = await userModel.find({});
if(allusers){
//sucess
return res.status(200).json({
    message:'Users fetched successfully',
    data: allUsers
})
}else // error
{
    return res. status(500).json({
        message:'Sorrys!, unable to fetch users'
    })
}
});

         app.post('/user', async(req, res)=>{
             const { firstName, lastName, dateOfBirth, school} =req.body
        const newUser = await userModel.create({
            firstName,
            lastName,
            dateOfBirth,
            school
                    
                    })
              if(newUser){
                    //success
                    return res.status(200).json({
                        message: 'User  has been created ',
                        data:newUser
                    })
                }else{
                    return res.status(500).json({
                        message:'Error creating User'
                    })

                }
                });
    

app.listen((PORT), () => { 
console.log(`listening on port ${PORT}`);
})
