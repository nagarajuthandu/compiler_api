
const { exec } = require('child_process');
let run=(req,res,next)=>{
    let data=req.body 
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
        }

        if (stderr) {
        res.status(200).json({"error" : stderr})
        next()
        }
        else{
        console.log(stdout)
        res.status(200).json({"output" : stdout.trim()})
        next()
        }
        

});

}
module.exports={run}