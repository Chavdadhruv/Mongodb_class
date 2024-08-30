const exp = require("express")
const mg=require("mongoose")
const bp=require('body-parser')
const cors=require('cors')
const bodyParser = require("body-parser")
const app=exp()
app.use(cors())
app.use(bodyParser.json())
mg.connect("mongodb://127.0.0.1:27017/dbl1")
.then(() => {
    console.log("success");
})
.catch((err) => {
    console.log(err);
});
mg.pluralize(null)

const userSchema = new mg.Schema({
    username:String
})
const User = new mg.model("user",userSchema)
app.post("/Signup",async(req,res)=>{
    try{
        const {username} = req.body
        const newUser = new User({username})
        await newUser.save();
        res.send()
    }
    catch(error){
        res.send(error)
    }
})
app.listen(5000)