const express = require('express');
const mongoose = require('mongoose');
const { Schema } = mongoose;



const app=express();
 

app.use(express.urlencoded({extended:true}));

const path= require("path");
app.set("views engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));


const port =8080;

// app.listen(port,()=>{
//     console.log(`app is listen on ${port}`);
// });

main().then(() => {
    app.listen(port || 8000, () => {
        console.log(`⚙️ Server is running at port : ${port}`);
    })
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/Student');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
  



const academicRecordSchema = new mongoose.Schema(
    {
        studentID: { type: String, required: true },
        name: { type: String, required: true },
        grades: { type: [Number], default: [] },
        subjects: { type: [String], default: [] },
        // Add other academic fields as needed
      }
,{
    timestamps:true
})

 const AcademicRecord= mongoose.model("AcademicRecord",academicRecordSchema)



const co_curriculamSchema = new mongoose.Schema(
    {
        studentID: { type: String, required: true },
        name: { type: String, required: true },
        grades: { type: [Number], default: [] },
        subjects: { type: [String], default: [] },
        // Add other academic fields as needed
      }
,{
    timestamps:true
})

const Co_Curriculam= mongoose.model("Co_Curriculam",co_curriculamSchema)

const academicRecords1 =[
  { studentID: "1", name: "John Doe", grades: [90, 85, 92], subjects: ["Math", "Science", "History"] },
  { studentID: "2", name: "Jane Smith", grades: [88, 92, 95], subjects: ["English", "Physics", "Geography"] },
 // Add more sample academic records
];

// Sample data for co-curricular activities
const coCurricularActivities1 = [
  { studentID: "1", name: "John Doe", activityType: "Sports", duration: "1 year", achievements: ["Team Captain"] },
  { studentID: "2", name: "Jane Smith", activityType: "Music", duration: "2 years", achievements: ["Concert Performer"] },
  // Add more sample co-curricular activities
];

//data insertion in AcademicRecord and Co_Curriculam

// AcademicRecord.insertMany(academicRecords1);
// Co_Curriculam.insertMany(coCurricularActivities1);


AcademicRecord.find()
Co_Curriculam.find()

// // Update operation
AcademicRecord.updateOne({ studentID: "2" }, { $set: { "grades.$[elem].grade": "A+" } }, { arrayFilters: [{ "elem.subject": "Math" }] })

Co_Curriculam.updateOne({ studentID: "2", name: "Jane ", grades: [88, 92, 95], subjects: ["English", "Physics", "Geography"] })


// // Delete operation
// Co_Curriculam.deleteOne({ studentID: "123456" })
