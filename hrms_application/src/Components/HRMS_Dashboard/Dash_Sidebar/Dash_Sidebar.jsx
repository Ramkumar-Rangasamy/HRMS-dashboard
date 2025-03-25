import React from 'react';
import './Dash_Sidebar.css';

// Import images correctly
import mainelement from '../Assets/element.png';
import message from '../Assets/message-text.png';
import calendar from '../Assets/calendar.png';
import profileuser from '../Assets/profile-2user.png';
import setting from '../Assets/setting.png';

const Dash_Sidebar = () => {
  return (
    <div className="sidebar-container">
      <div className="sidebar-icon">
        <img src={mainelement} alt="Main Element" />
      </div>
      <div className="sidebar-icon">
        <img src={message} alt="Message" />
      </div>
      <div className="sidebar-icon">
        <img src={calendar} alt="Calendar" />
      </div>
      <div className="sidebar-icon">
        <img src={profileuser} alt="Profile" />
      </div>
      <div className="sidebar-icon">
        <img src={setting} alt="Settings" />
      </div>
    </div>
  );
};

export default Dash_Sidebar;
