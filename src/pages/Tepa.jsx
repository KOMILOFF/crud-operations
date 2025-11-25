// import React from 'react'
// import "../index.css";
// import { BiSkipPreviousCircle } from "react-icons/bi";
// import { useNavigate } from "react-router-dom";
// import { IoMdNotificationsOutline } from "react-icons/io";
// import { IoSearchOutline } from "react-icons/io5";
// import { RiExpandUpDownLine } from "react-icons/ri";


// const navbar = () => {
//     const navigate = useNavigate();
    
//       const addStudent = () => {
//         navigate("/");
//       };

//   return (
//     <div>
//               <div className="st-nav">
//                 <span className="nav-next">
//                   <BiSkipPreviousCircle className="next"/>
//                 </span>
//                 <div className="input-wrapper">
//                   <input className="st-sr" type="text" placeholder="Search student" />
//                   <IoSearchOutline className="search-icon"/>
//                 </div>
//                 <span>
//                   <IoMdNotificationsOutline className="alarm"/>
//                 </span>
//               </div>
//               <div className="navigate-home">
//                 <h2 className="st-title">Students List</h2>
//                 <div className="collect">
//                   <RiExpandUpDownLine className="slider"/>
//                   <button className="add-st" onClick={addStudent}>
//                     ADD NEW STUDENT
//                   </button>
//                 </div>
//               </div>
        
//     </div>
//   )
// }

// export default navbar