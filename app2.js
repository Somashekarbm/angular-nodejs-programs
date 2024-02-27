const express=require('express');
const app=express();
const port = 3000;
app.get('/',(req,res)=>{
	res.end('<h1>hello from express js server!</h1><p>This content is displayed in the browser</p>');
});
app.listen(port,()=>{
	console.log(`server running at http://localhost:${port}/`);
});