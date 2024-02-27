const fs=require('fs')
fs.open('newFile_open.txt','w',(err,file2)=>{
	if(err){
		console.error(err);
		return;
	}
	console.log('file opened successfully');
});