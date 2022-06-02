let express=require("express")
let fs=require("fs")
const { exec } = require('child_process');
let app=express();
const PORT= process.env.PORT| 80;
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.get("/",(req,res)=>{
res.send("api is working at post")
});
app.post("/",(req,res)=>{
    let data=req.body
    
    
    let filename="Program."+req.body.language
    fs.writeFile(filename,data.code, function (err) {
        if (err) throw err;
        console.log('File is created successfully.');
      });
      
      if(data.language==="java")
      {
          var command="javac Program.java && java Program"
      }
      if(data.language==="py")
      {
          var command="python Program.py"
      }
     exec(command, (error, stdout, stderr) => {
            
    if (error) {
    console.error(`error: ${error.message}`);
    return;
  }

  if (stderr) {
    console.error(`stderr: ${stderr}`);
    
    res.status(200).json({error : `${stderr}`})
    return;
  }

  console.log(`stdout:\n${stdout}`);
  
  res.status(200).json({output : `${stdout}`})

  if(data.language==="java")
  {
    fs.unlink("Program.class",function(err){
      console.log(err)
    })
    fs.unlink("Program.java",function(err){
    console.log(err)
    })
  }
  if(data.language==="py")
      {
        fs.unlink("Program.py",function(err){
            console.log(err)
            })
      }
});

});

app.listen(PORT,()=>{console.log("app is running at http://localhost")})