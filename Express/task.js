var exp = require("express")
var app = exp()
const mg=require("mongoose")
mg.connect("mongodb://127.0.0.1:27017/dbl1")
.then(() => {
    console.log("success");
})
.catch((err) => {
    console.log(err);
});
mg.pluralize(null)
 
const mySchema = new mg.Schema({
    uname:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})
const person =new mg.model("formdata",mySchema)
app.use(exp.static(__dirname,{index:"form.html"}))
app.get("/process_get",(req,res)=>{
    const personData = new person({
        uname:req.query.uname,
        password:req.query.pwd
    })
    personData.save()
    res.send("Record inserted")
})
app.listen(2005)