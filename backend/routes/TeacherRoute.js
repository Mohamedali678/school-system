const express = require("express");
const teacherModel = require("../model/TeacherModel");

const router = express.Router();

//register teacher
router.post("/teacher/register", async (req, res) => {
  const teacherData = teacherModel(req.body);
  const result = await teacherData.save();
  res.send(result);
});

//display all teachers
router.get("/teacher", async (req, res) => {
  const getTeacherData = await teacherModel.find();
  res.send(getTeacherData);
});

router.get("/teacher/total", async (req, res) => {
  const totalTeachers = await teacherModel.find().countDocuments();

  res.send({ totalTeachers });
});


router.get("/teacher/salary", async (req, res) => {
  const totalSalary = await teacherModel.aggregate([
    {
      $group: { _id: null, total: { $sum: "$salary" } }
    }
  ]);

  res.send({ totalSalary });
});



module.exports = router;
