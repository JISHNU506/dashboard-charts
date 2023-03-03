import React from "react";

import Content from "../Content/Content";
import Navbar from "../Navbr/Navbar";


import Sidebar from "../Sidebar/Sidebar";

import "./Mycontent.css";

export default function MYContent() {
  return (
    <div>
      <div className="classroom">
        <div>
          <Sidebar />
        </div>
        <div className="classroom-nav-items">
         <Navbar/>
          <Content />
        </div>
      </div>
    </div>
  );
}
