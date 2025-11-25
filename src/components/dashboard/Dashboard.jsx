import React from "react";
import { Link } from "react-router-dom";
import profile from "../../assets/profile.png";
import { MdOutlineHome } from "react-icons/md";
import { CiBookmark } from "react-icons/ci";
import { PiStudentLight } from "react-icons/pi";
import { RiMoneyDollarBoxLine } from "react-icons/ri";
import { HiOutlineDocumentReport } from "react-icons/hi";

const Dashboard = () => {
  return (
    <div className="dashboard-sidebar">
      <h3 className="dash-tit">CRUD OPERATIONS</h3>
      <img className="logo" src={profile} alt="Logo" width="150" />
      <ul className="dashboard-ul">
        <li>
          <Link to="/">
            <p>
              <MdOutlineHome />
              Home
            </p>
          </Link>
        </li>
        <li>
          <Link to="/Course">
            <p>
              <CiBookmark />
              Course
            </p>
          </Link>
        </li>
        <li>
          <Link to="/Students">
            <p>
              <PiStudentLight />
              Students
            </p>
          </Link>
        </li>
        <li>
          <Link to="/Payment">
            <p>
              <RiMoneyDollarBoxLine />
              Payment
            </p>
          </Link>
        </li>
        <li>
          <Link to="/Report">
            <p>
              <HiOutlineDocumentReport />
              Report
            </p>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Dashboard;
