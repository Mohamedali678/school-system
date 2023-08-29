import { useEffect, useState } from "react";
import SideNav from "../components/Sidenav"
import {MdAttachMoney} from "react-icons/md"
import axios from "axios"
import { useNavigate } from "react-router-dom";


function Dashbaord(){

    const [totalTeacher, setTotalTeacher] = useState("")
    const [totalStudents, setTotalStudents] = useState("")
    const [totalSalary, setTotalSalary] = useState(" ")
    const navigte = useNavigate()

    

    const admin = localStorage.getItem("admin");

    const protectRoute = () => {
        if(admin){
            navigte("/")
        }
        else {
            navigte("/login")
        }
    }

    useEffect(() => {
        protectRoute()
    },)
    

    const getTotalTeacher = () => {
        axios.get("http://localhost:1000/teacher/total").then((response) => {
            setTotalTeacher(response.data.totalTeachers)
        })
    }

    const getTotalStudents = () => {
        axios.get("http://localhost:1000/total").then((response) => {
            setTotalStudents(response.data.totalStudents)
        })
    }

    const getTotalSalary = () => {
        axios.get("http://localhost:1000/teacher/salary").then((response) => {
            setTotalSalary(response.data.totalSalary[0].total )
        }).catch((error) => {
            console.log(error)
        })
    }

    useEffect(() => {
        getTotalTeacher()
        getTotalStudents()
        getTotalSalary()
    },[])

    return <div>
     
        <SideNav />

        <div className="main" > 
        <div className="container">

            <h1>Welcome { JSON.parse(admin).username} </h1>

            <div className="box-parent">

            <div className="box">
                <h1>Total Students</h1>
                <h1> {totalStudents} </h1>
            </div>

            <div className="box" style={{backgroundColor: "lightblue"}}>
            <MdAttachMoney size="30px" />
                <h1>${totalSalary}</h1>              
            </div>
            <div className="box" style={{backgroundColor: "orange"}}>
                <h1>Total Teachers</h1>
                <h1> {totalTeacher} </h1>
            </div>

            </div>
        </div>
        </div>
    </div>
}

export default Dashbaord;