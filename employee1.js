const mg=require("mongoose")
// const v=require("validator")
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
    // _id : Number,
    name : {type:String,requried:true},
    surname:String,
    age : Number,
    // position : String,
    // salary : Number,
    date:{type:Date,default:new Date()}
})

const employee = new mg.model("employee",myschema)
// const createDoc = async()=>{
//   try{
//       const data = [
//       {
//           _id:1,
//           name:'ken',
//           age:32,
//           position:'intern',
//           salary:3000
//       },
//       {
//         _id:2,
//         name:'Joe',
//         age:22,
//         position:'intern',
//         salary:2000
//       },
//       {
//         _id:3,
//         name:'Doe',
//         age:40,
//         position:'officer',
//         salary:30000
//       },
//       {
//         _id:4,
//         name:'John',
//         age:37,
//         position:'director',
//         salary:50000
//       }
//     ]
//     const result=[]
//     // result.push(await employee.insertMany(data))
//     // result.push(await employee.find())
//     // result.push(await employee.find({position:'intern'}))
//     // result.push(await employee.find({age:{$gte:30,$lte:40}},{name:1}))
//     // result.push(await employee.find().sort({salary:-1}).limit(1))
//     result.push(await employee.find({salary:{$gt : 30000}}))
//     console.log(result)
//   }
//   catch(err){
//       console.log('problem')
//   }
// }
// createDoc()




// type-2




// const employeedata=new employee({
//     name:"abc",
//     surname:"def",
//     age:21
// })
// employeedata.save()




// type-3




// const createdoc = async () => {
//   try {
//     // Create a new document
//     const employeeData = new employee({
//       name: 'hardik',
//       surname: 'dhruv',
//       age: 200
//     });

//     // Save the document to the database
//     const result = await employeeData.save();

//     // Log the result
//     console.log('Document saved:', result);
//   } catch (error) {
//     // Handle errors
//     console.error('Error saving document:', error);
//   } 
// };

// // Call the function
// createdoc();



// type -4




// const createdoc = async () => {
//   try {
//     // Create an array of documents to insert
//     const employeeData = [
//       { name: 'John', surname: 'Doe', age: 30 },
//       { name: 'Jane', surname: 'Doe', age: 25 },
//       { name: 'Alice', surname: 'Smith', age: 28 }
//     ];

//     // Insert multiple documents
//     const result = await Employee.insertMany(employeeData);

//     // Log the result
//     console.log('Documents inserted:', result);
//   } catch (error) {
//     // Handle errors
//     console.error('Error inserting documents:', error);
//   }
// };

// // Call the function
// createdoc();




// for delete One




// const deleteDocument = async () => {
//   try {
//     // Define the filter criteria to match the document you want to delete
//     const filter = { name: 'John' };

//     // Delete a single document that matches the filter criteria
//     const result = await employee.deleteOne(filter);

//     // Log the result
//     console.log('Document deleted:', result);
//   } catch (error) {
//     // Handle errors
//     console.error('Error deleting document:', error);
//   } 
// };

// // Call the function
// deleteDocument();



// push for update delete



// mg.pluralize(null)
// const person = new mg.model("person", myschema)
// const createdoc = async () => {
//     try {
//         const result = []
//         result.push(await person.find())
//         result.push(await person.deleteOne({ name: "abc" }))
//         console.log(result)
//     }
//     catch (err) {
//         console.log(err)
//     }
// }
// createdoc()




const updateDocumentById = async () => {
  try {
    // Define the document ID you want to update
    const id = '66c80c53f95e44d36ff64886'; // Replace with a valid ObjectId

    // Define the update operation
    const update = {
      name: 'jhfbjhkb',
      age: 54
    };

    // Define options (optional)
    const options = {
      new: true, // Return the updated document
      runValidators: true // Apply schema validation
    };

    // Perform the findByIdAndUpdate operation
    const updatedDocument = await Person.findByIdAndUpdate(id, update, options);

    // Check if document was found and updated
    if (updatedDocument) {
      console.log('Updated Document:', updatedDocument);
    } else {
      console.log('No document found with that ID.');
    }
  } catch (err) {
    // Handle errors
    console.error('Error updating document:', err);
  } finally {
    // Close the connection
    mongoose.connection.close();
  }
};

// Call the function
updateDocumentById();