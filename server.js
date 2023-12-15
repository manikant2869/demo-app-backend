const express = require('express');
const http = require('http');

const app = express();
const server = http.createServer(app);

const PORT = process.env.PORT || 3000;


app.get('/api/v1/test', (request, response, next) => {
    response.send({ success: false });
});
app.get('/api/v2/test', (request, response, next) => {
    response.send({ success: true }); 
});
app.get('/api/v3/test',(req,res)=>{
    res.send({message: "v3 testing"});
})
app.get('/api/v4/test',(req,res)=>{
    res.send({message: "v4 testing"})
})
app.get('/api/v5/test',(req,res)=>{
    res.send({message: "v5 testing"})
})
server.listen(PORT, () => {
    console.log(`Server started at port: ${PORT}`);
});
