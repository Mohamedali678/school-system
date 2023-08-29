import { useState } from "react";
import SideNav from "../components/Sidenav";
import axios from "axios"
import { useNavigate } from "react-router-dom";

function TeacherForm() {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [salary, setSalary] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const navigate = useNavigate()


  const getTeachers = (event) => {
    event.preventDefault()
    axios.post("http://localhost:1000/teacher/register", {
        "name": name,
        "email": email,
        "salary": salary,
        "title": title,
        "number": number
    }).then((response) => {
        navigate("/teacher")
    }).catch((error) => {
        console.log(error)
    })
    

    
  }




  return (
    <div>
      <SideNav />

      <div className="main">
        <div className="container">
          <h1>Register New Teacher</h1>
          <form>
            <input
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              type="text"
              placeholder="ENter name"
            />
            <br />

            <input type="text" placeholder="ENter title"
            value={title}
            onChange={(e) => {
                setTitle(e.target.value)
            }}
            
            />
            <br />
            <input type="text" placeholder="ENter Salary" 
            value={salary}
            onChange={(e) => {
                setSalary(e.target.value)
            }}
            />
            <br />
            <input type="text" placeholder="ENter Email" 
            value={email}
            onChange={(e) => {
                setEmail(e.target.value)
            }}

            />
            <br />
            <input type="text" placeholder="ENter Number"
            value={number}
            onChange={(e) => {
                setNumber(e.target.value)
            }}
            
            />
            <br />
            <button onClick={getTeachers} className="button">Save </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default TeacherForm;
