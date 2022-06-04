let fs=require("fs")
let removecodefile=function(req,res)
{
let data =req.body    
if(data.language==="java")
{
  fs.unlink("Program.class",function(err){
   if(err) console.log(err)
  })
  fs.unlink("Program.java",function(err){
    if(err) console.log(err)
  })
}
if(data.language==="py")
    {
      fs.unlink("Program.py",function(err){
      if(err) console.log(err)
          })
    }

}
module.exports={removecodefile}