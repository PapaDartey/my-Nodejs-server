const express = require('express')
const app = express();
const fs = require("fs")
const PORT = 6000;

app.get('/', (req, res) =>{
    res.send( 'Hello, World!');
}) ;

app.get('/users', (req, res) =>{
    fs.readFile("users.json","utf-8",(error, data)=>{
        if(error){
            console.log("Error reading from users.json",error)
            return res.status(500).send("Error occured in the server")
        }

        const users = JSON.parse(data)
        res.status(200).send(users)
    })
}) ;

app.get('/users/:id', (req, res) =>{
    fs.readFile("users.json","utf-8",(error, data)=>{
        if(error){
            console.log("Error reading from users.json",error)
            return res.status(500).send("Error occured in the server")
        }

        const users = JSON.parse(data)
        const users_array = Object.values(users)
        const found_user = users_array.find(user => user.id === parseInt(req.params.id) )
        if(!found_user){
            console.log("User not found")
            return res.status(404).send("User not found")
        }
        res.status(200).send(found_user)
    })
}) ;

app.get('/users/profession/:profession', (req, res) =>{
    fs.readFile("users.json","utf-8",(error, data)=>{
        if(error){
            console.log("Error reading from users.json",error)
            return res.status(500).send("Error occured in the server")
        }

        const users = JSON.parse(data)
        const users_array = Object.values(users)
        const found_user = users_array.find(user => user.profession === req.params.profession )
        if(!found_user){
            console.log("User not found")
            return res.status(404).send("User not found")
        }
        res.status(200).send(found_user)
    })
}) ;
app.get('/users/name/:name', (req, res) =>{
    fs.readFile("users.json","utf-8",(error, data)=>{
        if(error){
            console.log("Error reading from users.json",error)
            return res.status(500).send("Error occured in the server")
        }

        const users = JSON.parse(data)
        const users_array = Object.values(users)
        const found_user = users_array.find(user => user.name === req.params.name )
        if(!found_user){
            console.log("User not found")
            return res.status(404).send("User not found")
        }
        res.status(200).send(found_user)
    })
}) ;



app.listen(PORT, ()=>{
    console.log(`Server running on http://localhost:${PORT}`);
});
