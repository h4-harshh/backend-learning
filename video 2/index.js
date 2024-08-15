const fs=require('fs')

// writeFile
//appendfile
//copyfile
//rename
//unlink


//1.create and write in a file
// fs.writeFile("text.txt","my name is harsh",function(err)
// {
//     if(err) console.error(err);
//     else console.log("done");
// })

//2.append data in the existing file
// fs.appendFile("text.txt"," also known as nikhil",function(err)
// {
//     if(err) console.error(err);
//     else console.log("done");
// })

//3.Rename a file
// fs.rename('text.txt','renamed.txt',(err)=>{
//     if(err) console.error(err);
//     else console.log("renamed file successfully");
// })


// 4.copy file
// fs.copyFile('renamed.txt','copiedrenamed.txt',(err)=>{
//     if(err) console.error(err);
//     else console.log('copied file successfully');
// })

// 5.unlink file
// fs.unlink('copiedrenamed.txt',(err)=>{
//     if(err) console.error(err);
//     else console.log("file deleted successfully");
// })

//6.remove directory can remove only blank folders
// fs.rmdir('copy',{recursive:true},(err)=>{
//     if(err) console.error(err);
//     else console.log("remove folder successfully");
// })
//can use rm only too !!!!!!!!!important
//{recursive:true} delete folder whether empty or not
