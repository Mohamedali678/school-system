import {React, useSate, useState} from "react"
import axios from "axios"
import {useNavigate, userNavigate} from "react-router-dom"

function Login (){


    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    const loginAdmin = (event) => {
        event.preventDefault()
        axios.post("http://localhost:1000/admin/login", {
           "username": username,
           "password": password 
        }).then((response) => {

           if(response.data.username){
            //store admin data in localStorage
            localStorage.setItem("admin", JSON.stringify(response.data) )
            navigate("/")
           }

           else {
            alert("username or password incorrect!")
           }
        }).catch((error) => {
            console.log(error)
        })
     
    }

    return <div>
       
        <div className="login-form"> 
        <form className="form-lg">
           
            <input type="text" value={username} onChange={(event) => {
                setUsername(event.target.value)
            }} placeholder="Enter username" /><br />
            <input type="password" value={password} onChange={(event) => {
                setPassword(event.target.value)
            }} placeholder="Enter password" /><br />
            <button onClick={loginAdmin}>Login</button>
        </form>

        </div>
    </div>
}

export default Login