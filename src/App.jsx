import Dashboard from "./components/dashboard/Dashboard"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Student from "./pages/Student";
import Report from "./pages/Report";
import Payment from "./pages/Payment"
import Course from "./pages/Course";
import Home from "./pages/Home";
import Entrance from "./components/Entrance";
import { FaShieldVirus } from "react-icons/fa";
import { CgShapeRhombus } from "react-icons/cg";
import { useState } from "react";

const App = () => {
  const [signed, setSignet] = useState(false)

  if(signed ){

    return (

  <div className="app-ret">
    <Dashboard />
     <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Course" element={<Course/>} />
        <Route path="/Students" element={<Student/>} />
        <Route path="/Payment" element={<Payment/>} />
        <Route path="/Report" element={<Report/>} />
   
      </Routes>

   
  </div>

  )
  }else{
    return(
    <Entrance setSignet={setSignet}/>
      
    )
  }
}

export default App
