const router = require('express').Router();
const { response } = require('express');
const multer = require('multer');
const path = require('path');
const FilesModel = require('../models/FilesModel');
const {v4: uuid4} = require('uuid');


const storage = multer.diskStorage({

    destination : (req , file , callback)=> callback(null , 'uploads/'), 
    filename:(req ,file , call)=>{
        const UqName = `${Date.now()}-${Math.round(Math.random)*1E9}${path.extname(file.originalname)}`
        call(null , UqName);
    }

})

let upload = multer({
    storage,
    limit :{ fileSize : 1000000*100*1}
    
}).single('MyFile');

router.post('/',(req , res )=>{
  
    upload(req ,res ,async (err)=>{

        if(!req.file){
            return res.json({
                error: 'failed'
            })
        }
        
        if(err){
           return res.status(500).send({error : err.massage})
        }
        const doUpload = new FilesModel({

            filename : req.file.filename,
            path : req.file.path,
            size :req.file.size,
            uuid : uuid4(),
            sendBy : null,
            getBY :null,

        });
        const ResultUpload = await doUpload.save();
        return res.json({ File : `${process.env.BASE_URL}/file/${ResultUpload.uuid}`})

    });

});

module.exports = router;