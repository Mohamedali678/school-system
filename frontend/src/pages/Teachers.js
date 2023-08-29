import { useEffect, useState } from "react";
import SideNav from "../components/Sidenav";
import { Link } from "react-router-dom";
import axios from "axios"

function Teachers(){


    const [teachers, setTeachers] = useState([])



    const getAllTeachers = () => {
        axios.get("http://localhost:1000/teacher").then((response) => {
            setTeachers(response.data)
        }).catch((error) => {
            console.log(error)
        })
    }

    useEffect(() => {
        getAllTeachers()
    }, [])




    return <div>
        
        <SideNav />
       <div className="main"> 
       <div className="container">

       <Link className="button" to="/teacherform">Add Teacher</Link>

       <table>
        <tr>
        <th>Name</th>
        <th>Title</th>
        <th>Salary</th>
        <th>Number</th>
        <th>Email</th>
        </tr>



        {
            teachers.length > 0 ? teachers.map((teacher, index) => (
                
                <tr>
                    <td>{teacher.name}</td>
                    <td>{teacher.title}</td>
                    <td>${teacher.salary}</td>
                    <td>{teacher.number}</td>
                    <td>{teacher.email}</td>
                </tr>
                ))

                :
                <p>There is no data</p>
        }





       </table>
     

       </div>

      
        </div>    </div>
}

export default Teachers;