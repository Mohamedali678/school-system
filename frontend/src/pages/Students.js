import { useEffect, useState } from "react";
import SideNav from "../components/Sidenav";
import axios from "axios"
import { Link } from "react-router-dom";
import {AiFillDelete, AiFillEdit} from "react-icons/ai"


function Students(){

    const [students, setStudents] = useState([]);

    const getAllStudents = () => {
        
        axios.get("http://localhost:1000/students").then((response) => {
            setStudents(response.data)
        }).catch((error) => {
            console.log(error)
        })
    }


    useEffect(() => {
        getAllStudents()

    }, [])



    const deleteStudent = (id)=> {
        axios.delete(`http://localhost:1000/student/delete/${id}`).then((response) => {
        
        getAllStudents()
        
        alert("deleted student")
        }).catch((error) => {
            console.log(error)
        })
    }


    const searchHandle = (event) => {
        let key = event.target.value;
        if(key){    
            axios.get(`http://localhost:1000/student/data/${key}`).then((response) => {
            setStudents(response.data)
            
        }).catch((error) => {
            console.log(error)
        })

        }
        else {
            getAllStudents()
        }

    }



    return <div>
        <SideNav />
        <div className="main"> 


            <div className="container">
            {/* <h1>This is Students</h1> */}
          <div className="form"> 
        <Link className="button" to="/form">Add student</Link>

        <form>
            <textarea onChange={searchHandle} className="searchInput" type="text" placeholder="Enter name" />
        </form>
        </div> 

       <table>
        <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Age</th>
        <th>Address</th>
        <th>Number</th>
        <th>ParentName</th>
        <th>Class</th>
        <th>Image</th>
        <th>Action</th>
        <th>Action</th>
    </tr>

    {
        students.map((data, index) => (
            <tr key={index}>
                <td> {data.ID} </td>
                <td> {data.name} </td>
                <td> {data.age} </td>
                <td> {data.address} </td>
                <td> {data.number} </td>
                <td> {data.parentName} </td>
                <td> {data.class} </td>
                <td> <img width="50px" height="50px" style={{ borderRadius: "50%" }} src={`http://localhost:1000/images/${data.image}`} /> </td>

                <td> <button onClick={ ()=> deleteStudent(data._id) } className="deleteBtn"><AiFillDelete size="25px" /></button> </td>
                
                <td> <Link to={`/updateform/${data._id}`} className="deleteBtn"><AiFillEdit /> </Link> </td>
            </tr>
        ))

    }

</table>
   
            </div>
        </div>
    </div>
}

export default Students;