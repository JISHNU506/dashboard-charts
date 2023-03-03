import React, { useState } from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import {
  Dashboard,
  Logout,
  Layers,
  Groups,
  CalendarViewMonthRounded,
  Email,
  Person,
  TurnedIn,
} from "@mui/icons-material";

export default function Sidebar() {
  const [isExpanded, setExpandedState] = useState(false);
  const menuitems = [
    {
      text: "Bar Chart",
      icon: <i class="fa-solid fa-chart-simple"></i>,
      link: "/",
    },
    {
      text: "Line Chart",
      icon: <i class="fa-sharp fa-solid fa-chart-line"></i>,
      link: "/line",
    },
    {
      text: "Area Chart",
      icon: <i class="fa-solid fa-chart-area"></i>,
      link: "/area",
    },
   
    {
      text: "Scatter Chart",
      icon:<i class="fa-sharp fa-solid fa-arrow-up-right-dots"></i>,
      link: "/scatter",
    },
    {
      text: "Donut Chart",
      icon:<i class="fa-sharp fa-solid fa-chart-pie"></i>,
      link: "/pie",
    }, {
        text: "Radar Chart",
        icon:<i class="fa-solid fa-diagram-project"></i>,
        link: "/radar",
      },
  ];
  return (
    <>
      <div
        className={
          isExpanded
            ? "side-nav-container"
            : "side-nav-container side-nav-container-NX"
        }
      >
        <div className="nav-upper">
          <div className="nav-heading">
            {isExpanded && (
              <div className="nav-brand">
                &nbsp;&nbsp;&nbsp;
                <h2>Charts</h2>
              </div>
            )}
            <button
              className={
                isExpanded
                  ? "hamburger hamburger-in "
                  : "hamburger hamburger-out"
              }
              onClick={() => setExpandedState(!isExpanded)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
          <div className="nav-menu">
            {menuitems.map(({ text, link, icon }) => (
              <a
                href={link}
                className={isExpanded ? "menu-item" : "menu-item menu-item-NX"}
              >
                <div className="icn">{icon}</div>

                {isExpanded && <p className="sing">{text}</p>}

                {!isExpanded && <div className="tooltipside">{text}</div>}
              </a>
            ))}
          </div>
        </div>
        <div className="nav-footer">
          {isExpanded && (
            <div className="nav-details">
              <img src="" alt="" />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
