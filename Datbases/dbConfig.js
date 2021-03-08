require('dotenv').config();
const mongoose = require('mongoose');
 
function DatabaseInstance(){
     
    mongoose.connect("mongodb+srv://dbUser:Gopal123@cluster0.agpbh.mongodb.net/FileShareDb?retryWrites=true&w=majority" ,{ useNewUrlParser : true , 
    useCreateIndex: true , useUnifiedTopology: true , useFindAndModify: true});
    const connection = mongoose.connection; 
    connection.once('open',()=> {
       console.log('connected');
   }).catch(err =>{
       console.log('Error while connecting')
   })
       

}
module.exports = DatabaseInstance;