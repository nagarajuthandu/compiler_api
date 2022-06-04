let express=require("express")
let {removecodefile}=require("./middlewares/removecodefiles")
let {generatecodefile}=require("./middlewares/generatecodefile")
let {run}=require("./controllers/run")
let app=express();
const PORT= process.env.PORT| 80;
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.get("/",(req,res)=>{
res.send("api works with post method example req {language:py,code:ptint('welcome')}")
});
app.post("/",generatecodefile,run,removecodefile);

app.listen(PORT,()=>{console.log("app is running at http://localhost")})