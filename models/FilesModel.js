const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const FileSchema = new Schema ({
    filename : {type : String , required: true},
    path : {type : String , required: true},
    size : {type : Number , required: true},
    uuid : {type : String , required: true},
    sendBy : {type : String , required: false},
    getBY : {type : String , required: false},
 
}, {timestamps:true})

module.exports = mongoose.model('FilesModel',  FileSchema);