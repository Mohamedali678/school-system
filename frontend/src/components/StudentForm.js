import { useState } from "react";
import Sidenav from "./Sidenav";
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

function StudentForm() {
  const [ID, setID] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [className, setClassName] = useState("");
  const [address, setAddress] = useState("");
  const [parentName, setParentName] = useState("");
  const [number, setNumber] = useState("");

  const [image, setImage] = useState(null)

  const navigate = useNavigate()





  const registerStudent = (event) => {

    let formData = new FormData()

    formData.append("ID", ID)
    formData.append("name", name)
    formData.append("age", age)
    formData.append("address", address)
    formData.append("parentName", parentName)
    formData.append("className", className)
    formData.append("number", number)
    formData.append("image", image)

    event.preventDefault()
    axios.post("http://localhost:1000/register", formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }

    }).then((response) => {

        toast("Student registered successfully", {
            onClose: () => navigate("/student"),
            autoClose: 1000,
            hideProgressBar: false,
            position: "top-right"
        })

    }).catch((error) => {
        console.log(error)
    })
  }


  // const handelImageOnChange = (event) => {
  //   setImage(event.target.files[0])
  // }

  return (
    <div>
      <Sidenav />
      <div className="main">
        <div className="container">
          <h1>Register New Student</h1>

          <form onSubmit={registerStudent}>
            
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
            

            <input type="file" onChange={(event) => {setImage(event.target.files[0])}}  placeholder="Select Image" />
            

            <br />
            <button className="button" type="submit">  Add Student</button>
          </form>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
}

export default StudentForm;
