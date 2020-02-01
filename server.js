const express= require('express');
const app = express();
const path = require('path');
const http = require('http');

const bodyParser = require('body-parser');


const router = require('./routes/home');


app.use(express.static(path.join(__dirname,'./src')));

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.set("view engine", "ejs");

const server = http.createServer(app);
const {PORT = 50000} = process.env

app.use(router);

server.listen(PORT,()=>{
    console.log(`Server is Running on PORT : ${PORT}`);
})


