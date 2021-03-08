const express = require('express')
const app = express();
const PORT = process.env.PORT || 3000

const DatabaseInstance = require('./Datbases/dbConfig')
DatabaseInstance();

//Requests
app.use('/api/file', require('./routes/Myfiles'))



app.listen(PORT ,()=>{
    console.log(`Listning On ${PORT}`)
})