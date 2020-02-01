const express= require('express')

const router = express.Router();


module.exports = router.get('/',(req,res)=>{
    res.sendFile('../src/index.html',{root:__dirname});
})

