import React from 'react';
import './Dash_Header.css';
import profileimage from '../Assets/dash_profile.png'

import { CgMathPlus } from "react-icons/cg";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { IoSettingsSharp } from "react-icons/io5";



const Dash_Header = () => {
  return (
    <div className="hrms-dashboard-header-container">
      <div className="hrms-dhc-lr-control">

        <div className="hrms-dhc-header-left">
          <h1>HRMS</h1>
          <input type="text" className='hrms-dhc-Seacrh-box' placeholder="search for pages, request, tasks..." />
        </div>

        <div className="hrms-dhc-header-right">
            <button className="hrms-dhc-create-post-btn">
              Create a post <CgMathPlus size='1.1rem'/>
            </button>
            <BsFillQuestionCircleFill className="hrms-dhc-header-icon" />
            <IoSettingsSharp className="hrms-dhc-header-icon" />
            <img src={profileimage} alt="Profile" className="hrms-dhc-profile-img" />
        </div>
      </div>
    </div>
  );
};

export default Dash_Header;
