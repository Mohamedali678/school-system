
import {Route, Routes} from "react-router-dom"
import Dashbaord from "./pages/Dashboard";
import Students from  "./pages/Students"
import Teachers from "./pages/Teachers"
import Subjects from "./pages/Subjects"
import Classes from "./pages/Classes"
import Staff from "./pages/Staff";
import StudentForm from "./components/StudentForm";
import StudentUpdateForm from "./components/StudentUpdateForm";
import TeacherForm from "./components/TeacherForm";
import Login from "./pages/Login"

function App(){
    
    return <Routes>
        <Route path="/" element={<Dashbaord />} />
        <Route path="/student" element={<Students />} />
        <Route path="/teacher" element={<Teachers />} />
        <Route path="/subject" element={<Subjects />} />
        <Route path="/class" element={<Classes />} />
        <Route path="/staff" element={<Staff />} />

        //Login
        <Route path="/login" element={<Login />}  />

        //forms

        <Route path="/form" element={<StudentForm />} />
        <Route path="/updateform/:id" element={<StudentUpdateForm />} />

        <Route path="/teacherform" element={<TeacherForm />} />

    </Routes>
      
   
}

export default App;