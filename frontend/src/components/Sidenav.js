import { NavLink, Link } from "react-router-dom"
import {MdOutlineDashboard, MdSubject, MdMenu, MdPersonAddAlt1} from "react-icons/md"
import {BsPersonFill} from "react-icons/bs"
import {FaChalkboardTeacher} from "react-icons/fa"
import {SiGoogleclassroom} from "react-icons/si"
import {AiOutlineLogout, AiOutlineClose} from "react-icons/ai"
import { useState } from "react"
import {ImMenu} from "react-icons/im"

function Sidenav(){

    const [isOpen, setIsOpen] = useState(false);


    const logout = ()=> {
      localStorage.clear()
    }


  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };

    return <div> 
    <div className="sidenav" style={{ width: isOpen === true ? "34px" : "" }} > 
    
    <button
      onClick={handleIsOpen}
      style={{
        marginLeft: isOpen === true ? "1px" : "",
        display: isOpen === false ? "block" : "none",
      }}
    >
      <AiOutlineClose size="30px" color="white" />
    </button>

    <button
      onClick={handleIsOpen}
      style={{
        marginLeft: isOpen === true ? "1px" : "",
        display: isOpen === true ? "block" : "none",
      }}
    >
      <ImMenu color="white" size="30px" />{" "}
    </button>

    <ul>
       <li> <NavLink to="/">  <MdOutlineDashboard style={{marginRight: "12px"}}/> Dashbaord</NavLink></li>
            <li><NavLink to="/student"> <BsPersonFill style={{marginRight: "12px"}} /> Students</NavLink></li>
            <li><NavLink to="/teacher"> <FaChalkboardTeacher style={{marginRight: "12px"}}/> Teachers </NavLink></li>
            <li><NavLink to="/class">  <SiGoogleclassroom style={{marginRight: "12px"}} /> Classes </NavLink></li>
            <li><NavLink to="/subject"> < MdSubject style={{marginRight: "12px"}} /> Subjects </NavLink> </li>
            <li><NavLink to="/staff">  <MdPersonAddAlt1 style={{marginRight: "12px"}} /> Staff </NavLink></li>

            <li><Link to="/login" onClick={logout}>  <AiOutlineLogout style={{marginRight: "12px"}} /> Logout </Link> </li>

    </ul>

    </div>

    {/* <div className="main">

    </div> */}

    </div>

}

export default Sidenav;





