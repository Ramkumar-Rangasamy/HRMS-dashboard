import React, { useState } from "react";
import './Dash_Main.css';


//using in dayjs and daypicker calender here ...
import dayjs from "dayjs";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

//import and use in imae here..
import userprofile from '../../Assets/dash_profile.png';
import announcement from '../../Assets/mdi_announcement.png';
import calendarbold from '../../Assets/solar_calendar-bold.png';
import materialsymbols from '../../Assets/material-symbols-light_feed-rounded.png';
import bxsparty from '../../Assets/bxs_party.png';
import holidayvillage from '../../Assets/fontisto_holiday-village.png';
import mingcutefill from '../../Assets/mingcute_paper-fill.png';
import yourfeed from '../../Assets/yourfeed.jpeg';
import lastpofile from '../../Assets/lastprofile.jpeg';

//useing and imported react-iocns here...
import { AiFillClockCircle } from "react-icons/ai";
import { FaRegThumbsUp ,FaRegCommentAlt } from "react-icons/fa";
import { FaRegShareFromSquare } from "react-icons/fa6";



const announcements = [
  { image: bxsparty, title: "Today's Birthday Employee", detail: "2 Celebrations" },
  { image: holidayvillage, title: "Your leave balance", detail: "5 Days" },
  { image: mingcutefill, title: "Payslip for this month", detail: "View" },
];

const posts = [
  {
    id: 1,
    name: "David Jones",
    role: "Senior HR",
    image: yourfeed,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
  },
  {
    id: 2,
    name: "David Jones",
    role: "Senior HR",
    image: yourfeed,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
  },
];
const Dash_Main = () => {
  const user = {
    name: "David Jones",
    profileImage: userprofile,
  };

  const [timeIn, setTimeIn] = useState("5:00AM");
  const [timeOut, setTimeOut] = useState("10:00AM");
  const [lastUpdated, setLastUpdated] = useState("5:00AM");

  const handleTimeIn = () => {
    const newTimeIn = dayjs().format("h:mmA");
    setTimeIn(newTimeIn);
    setLastUpdated(newTimeIn);
  };

  const handleTimeOut = () => {
    const newTimeOut = dayjs().format("h:mmA");
    setTimeOut(newTimeOut);
    setLastUpdated(newTimeOut);
  };

  const [selectedDay, setSelectedDay] = useState(new Date());

  return (
    <>
      <div className="mp-all-scroll-slection">
        <div className="mp-pic-ttracking-container">

          <div className="mp-pic-contain-profile-section">
            <img src={user.profileImage} alt="Profile" className="mp-pic-profile" />
            <div className="mp-pic-contain-container">
              <h2>Hello, {user.name}</h2>
              <p className='mp-pic-contain-item-two'>Hope you are having a great day</p>
            </div>
          </div>

          <div className="mp-ttracking-section">
            <p className="mp-tt-last-updated">Last updated: {lastUpdated}</p>
            <div className="mp-tt-text-time-buttons-sub-container">

              <div  className="mp-tt-text-time-buttons">
                <p>{timeIn} <AiFillClockCircle size='1.5rem' className="mp-time-in-icon" /></p>
                <button className="time-in" onClick={handleTimeIn}>
                  Time-in
                </button>
              </div>

              <div className="mp-tt-text-time-buttons">
                <p>{timeOut}  <AiFillClockCircle size='1.5rem' className="mp-time-out-icon" /></p>
                <button className="time-out" onClick={handleTimeOut}>
                  Time-out
                </button>
              </div>
            </div>
          </div>
          </div>

          <div className="ACYF-mp-total-container">
          {/* Left Sidebar */}
          <div className="ACYF-mp-Announcement-Calendar-container">
            <div className="mp-title-and-icon-style-container">
              <h3>Announcement</h3>
              <img  src={announcement}/>
            </div>

            {announcements.map((item, index) => (
              <div key={index} className="ACYF-mp-Announcement-card">
                <img src={item.image} />
                <div className="ACYF-mp-Announcement-items">
                  <strong>{item.title}</strong>
                  <p>{item.detail}</p>
                </div>
              </div>
            ))}

            {/* Calendar with Date Picker */}
            <div className="mp-title-and-icon-style-container">
              <h3>Calendar</h3>
              <img src={calendarbold}/>
            </div>
            <div className="calendar-container">
              <DayPicker
                mode="single"
                selected={selectedDay}
                onSelect={setSelectedDay}
                showOutsideDays
                fixedWeeks
                className="custom-day-picker"
              />
            </div>
          </div>

          {/* Feed Section */}
          <div className="mp-Your-feed-container">
            <div className="mp-title-and-icon-style-container">
              <h3>Your Feed</h3>
              <img src={materialsymbols}/>
            </div>

            {posts.map((post) => (
              <div key={post.id} className="mp-Your-feed-post-card-backg">
                <div className="mp-yf-post-inside-card">
                  <div className="mp-yf-post-header">
                    <img src={userprofile} alt="User" />
                    <div>
                      <strong>{post.name}</strong>
                      <p>{post.role}</p>
                    </div>
                  </div>
                  <div className="mp-yf-post-items-container">
                    <img src={post.image} alt="Post" className="mp-yf-main-poster-image" />
                    <div className='mp-yf-actions-text-post-area'>
                      <p>{post.content}</p>
                      <div className="mp-yf-actions-controls">
                          <button className="mp-yf-action-btn">
                            <FaRegThumbsUp /> Like
                          </button>
                          <button className="mp-yf-action-btn">
                            <FaRegCommentAlt /> Comment
                          </button>
                          <button className="mp-yf-action-btn">
                            <FaRegShareFromSquare /> Share
                          </button>
                          <div className="profile-menu">
                            <img
                              src={lastpofile}
                              alt="Profile"
                              className="profile-img"
                            />
                            <span className="dropdown-icon">▼</span>
                          </div>
                        </div>
                    </div>
                  </div> 
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dash_Main;
