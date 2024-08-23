const mg=require("mongoose")
const v=require("validator")
// use mongosh for link dbl1 is database
mg.connect("mongodb://127.0.0.1:27017/dbl1")
// then for success and catch for error 
  .then(() => {
    console.log("success");
  })
  .catch((err) => {
    console.log(err);
  });

//
const myschema = new mg.Schema({
    _id : Number,
    name : String,
    age : Number,
    position : String,
    salary : Number
})

const employee = new mg.model("employee",myschema)
const createDoc = async()=>{
  try{
      const data = [
      {
          _id:1,
          name:'ken',
          age:32,
          position:'intern',
          salary:3000
      },
      {
        _id:2,
        name:'Joe',
        age:22,
        position:'intern',
        salary:2000
      },
      {
        _id:3,
        name:'Doe',
        age:40,
        position:'officer',
        salary:30000
      },
      {
        _id:4,
        name:'John',
        age:37,
        position:'director',
        salary:50000
      }
    ]
    const result=[]
    // result.push(await employee.insertMany(data))
    // result.push(await employee.find())
    // result.push(await employee.find({position:'intern'}))
    // result.push(await employee.find({age:{$gte:30,$lte:40}},{name:1}))
    // result.push(await employee.find().sort({salary:-1}).limit(1))
    result.push(await employee.find({salary:{$gt : 30000}}))
    console.log(result)
  }
  catch(err){
      console.log('problem')
  }
}
createDoc()