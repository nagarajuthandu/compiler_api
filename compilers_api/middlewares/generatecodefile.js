let fs=require("fs")
let generatecodefile=function(req,res,next)
{
    let data=req.body
    let filename="Program."+data.language
    fs.writeFileSync(filename,data.code, function (err) {
        if (err) throw err;
      });
    next();  
}
module.exports={generatecodefile}