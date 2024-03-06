const express=require('express');
const app=express();
const port = 3000;
app.get('/',(req,res)=>{
	res.end('<h1>hello from express js server!</h1><p>This content is displayed in the browser</p>');
});
app.listen(port,()=>{
	console.log(`server running at http://localhost:${port}/`);
});

//current program
const http = require('http');



// Create a server object

const server = http.createServer((req, res) => {

    // Set the response HTTP header with HTTP status and Content type

    res.writeHead(200, {'Content-Type': 'text/plain'});



    // Send the response body "Hello from Node.js Server!"

    res.end('Hello from Node.js Server!\n');

});



// Server listens on port 3000

const PORT = 3000;

server.listen(PORT, () => {

    console.log(`Server running at http://localhost:${PORT}/`);

});
