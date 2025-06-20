const express=require("express");
const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.post("/formdata",(req,res)=>{
    const Getdata=req.body;
    res.status(201).json({message:"Successfully Data Received",
        data:Getdata
    });
});
app.listen(8000,()=>{
    console.log("Server is listen at 8000");
})