

//create server

const express = require("express");

const server = express();

const middleware1 = (req, res, next) =>{
    console.log("This is middleware 1");
    next()   //block the flow and take it back to the requested route
}

const middleware2 = (req, res, next) =>{
    console.log("This is middleware 2");
    next()   //block the flow and take it back to the requested route
}

server.use(middleware1);
// server.use(middleware2);




server.get("/",(req, res)=>{
    res.send("WELCOME")
})  

server.get("/user",middleware2,(req, res)=>{
    res.send("<h1>hello Jitu</h1>")
})  

server.get("/about",(req, res)=>{
    res.send({name: "Jitu", age: "22"})
})

server.listen(3001, () =>{
    console.log("Server is running at porty: 3001");
})







// HTTP METHODS
// CRUD: create read update delete
// get post update/put delete


//middlewares: 