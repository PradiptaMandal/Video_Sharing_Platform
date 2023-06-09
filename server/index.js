const express=require("express")
const app=express()
app.listen(4000,(err)=>{
    if(!err){
        console.log("started")
    }else{
        console.error(err)
    }
})
