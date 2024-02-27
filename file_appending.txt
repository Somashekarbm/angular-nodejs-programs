const fs=require('fs')
fs.appendFile('newFile_append.txt','content appended',(err)=>{
	if(err){
		console.error(err);
		return;
	}
	console.log('file created(or content append) successfully');
});