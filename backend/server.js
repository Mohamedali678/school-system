const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const teacherRoute = require("./routes/TeacherRoute");
const studentRoute = require("./routes/StudentRoute");
const adminRoute = require("./routes/AdminRoute")

const app = express();
app.use(cors());

app.use(express.json());
//connecting to the database

mongoose
  .connect("mongodb://0.0.0.0:27017/school")
  .then(() => {
    console.log("Database has been connected successfully");
  })
  .catch((error) => {
    console.log(error);
  });

//making images pubpic to use
app.use("/images", express.static("studentImage"))

app.use(studentRoute);
app.use(teacherRoute);
app.use(adminRoute)



app.listen(1000, () => {
  console.log("Server is running on port 1000");
});
