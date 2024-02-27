const fs=require('fs')
fs.writeFile('newFile_open.txt','content written',(err)=>{
	if(err){
		console.error(err);
		return;
	}
	console.log('written into file successfully');
});