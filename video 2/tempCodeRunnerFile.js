fs.appendFile("text.txt"," also known as nikhil",function(err)
{
    if(err) console.error(err);
    else console.log("done");
})