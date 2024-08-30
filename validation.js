const mg=require("mongoose")
const v=require("validator")
mg.connect("mongodb://127.0.0.1:27017/dbl1")
  .then(() => {
    console.log("success");
  })
  .catch((err) => {
    console.log(err);
  });

const mySchema=new mg.Schema(
    {
        name:
        {
            type:String,
            required:true,
            lowercase:true,
            trim:true,
            minlength:[3,"Min length must be 3"],
            maxlength:[10,"Max lenght must be 10"]
        },
        gender:
        {
            type:String,
            uppercase:true,
            enum:['MALE','FEMALE']
        },
        age:
        {
            type:Number,
            validate(v1){
                if(v1<=0){
                    let k=new Error("Age must be positive")
                    throw k;
                }
            }
        },
        email:
        {
            type:String,
            validate(val){
                if(!v.isEmail(val)){
                    throw new Error("Enter valid email")
                }
            }
        }
    }
)
const person = new mg.model("person",mySchema)
const createDoc = async()=>{
    try{
        const personData = new person({
            name : "Kendal",
            age : 31,
            email : 'kendal@gmail.com',
            gender : 'FEMALE'
        })
        const personData1 = new person({
            name : 'Joe',
            age : -40,
            email : 'Joe@gmail.com',
            gender : 'MALE'
        })
        const result = await person.insertMany([personData,personData1])
        console.log(result)
    }
    catch(err){
        console.log('problem')
    }
}
createDoc()