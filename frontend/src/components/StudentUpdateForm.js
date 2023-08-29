import { useEffect, useState } from "react";
import Sidenav from "./Sidenav";
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate, useParams } from "react-router-dom";


function StudentUpdateForm() {

  const [ID, setID] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [className, setClassName] = useState("");
  const [address, setAddress] = useState("");
  const [parentName, setParentName] = useState("");
  const [number, setNumber] = useState("");


  const navigate = useNavigate()
  const params = useParams()


  const getOneStudent = () => {
   
    console.log(params.id)
    axios.get(`http://localhost:1000/student/${params.id}`).then((response) => {
      
    setID(response.data[0].ID)
    setName(response.data[0].name)
    setAddress(response.data[0].address)
    setAge(response.data[0].age)
    setClassName(response.data[0].className)
    setParentName(response.data[0].parentName)
    setNumber(response.data[0].number)
    
    
    }).catch((error)=> {
      console.log(error)
    } )
  
  }

  useEffect(() => {
    getOneStudent()
  },[])


  const updateStudent = (event) => {
   
    event.preventDefault()
    axios.put(`http://localhost:1000/student/update/${params.id}`, {
      "ID": ID,
      "name": name,
      "age": age,
      "address": address,
      "parentName": parentName,
      "number": number,
      "className": className
    }).then((response) => {
      alert("student updated successfully")
      navigate("/student")
    }).catch((error) => {
      console.log(error)
    })
  }

  


  return (
    <div>
      <Sidenav />
      <div className="main">
        <div className="container">
          <h1>Update Student</h1>

          <form>

            <input
              type="text"
              placeholder="Enter ID"
              value={ID}
              onChange={(e) => {
                setID(e.target.value);
              }}
            />

            <br />
            <input type="text" placeholder="Enter name"
            value={name}
            onChange={(e) => {
                setName(e.target.value)
            }}
            
            />
            <br />
            <input type="text" placeholder="Enter class"
            value={className}
            onChange={(e) => {
                setClassName(e.target.value)
            }}
            />
            <br />
            <input type="text" placeholder="Enter Address"
            value={address}
            onChange={(event) => {
                setAddress(event.target.value)
            }}
            />
            <br />
            <input type="text" placeholder="Enter Number" 
            value={number}
            onChange={(event) => {
                setNumber(event.target.value)
            }}
            />
            <br />
            <input type="text" placeholder="Enter Age" 
            value={age}
            onChange={(event) => {
                setAge(event.target.value)
            }}
            />
            <br />
            <input type="text" placeholder="Enter Parent Name"
            value={parentName}
            onChange={(event) => {
                setParentName(event.target.value)
            }}
            />
            <br />
            <input type="file" placeholder="Select Image" />
            <br />
            
            <button onClick={updateStudent} >Update Student</button>
          
          </form>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
}

export default StudentUpdateForm;
