const express = require("express")
const studentModel = require("../model/studentModel")
const multer = require("multer")
const router = express.Router()


const imageLocation = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "studentImage")
  },

  filename: (req, file, cb) => {
    cb(null, file.originalname)
  }
})

const uploadImage = multer({
  storage:imageLocation
})



router.post("/register", uploadImage.single("image"), async(req, res) => {
    const studentData = studentModel({
      ID: req.body.ID,
      name: req.body.name,
      address: req.body.address,
      age: req.body.age,
      parentName: req.body.parentName,
      number: req.body.number,
      className: req.body.className,
      image: req.file.filename
    });
    const savedData = await studentData.save()
    res.send(savedData);
})


router.get("/students", async (req, res) => {
    const getData = await studentModel.find();
    res.send(getData);
})


router.get("/student/:id", async (req, res) => {
    const singleStudent = await studentModel.find({ _id: req.params.id})
    res.send(singleStudent);
})


router.delete("/student/delete/:id", async (req, res) => {
    try{
     const deleteStudent = await studentModel.deleteOne({_id: req.params.id})
     res.send(deleteStudent);
    }
    catch(error){
     console.log(error)
    }
 
 
 })



 router.get("/student/data/:key", async (req, res) => {
   try {
     const searchStudent = await studentModel.find({
       $or: [
         {
           name: { $regex: req.params.key },
         },
         {
           ID: { $regex: req.params.key },
         },
       ],
     });
     res.send(searchStudent);
   } catch (error) {
     console.log(error);
   }
 });
 
router.put("/student/update/:id", async(req, res) => {
    const updateStudent = await studentModel.updateOne(
        {_id: req.params.id},
        {$set: req.body}
        )
        res.send(updateStudent)
})


router.get("/total", async (req, res) => {
    const totalStudents = await studentModel.find().countDocuments();
    res.send({ totalStudents });
  });


module.exports = router
