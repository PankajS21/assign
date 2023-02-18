const express= require('express');
const app= express();

app.post("/api",(req,res)=>{
    res.send(JSON.stringify({"users":["userOne","userTwo","userThree","userFour"]}));
});

app.listen(5000, ()=>{console.log("Server started on Port 5000")});