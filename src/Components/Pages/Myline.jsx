import React from 'react'
import Line from '../Content/Line';
import Navbar from '../Navbr/Navbar';


import Sidebar from "../Sidebar/Sidebar";

import "./Mycontent.css"

function Myline() {
  return (
    <div>
      <div className="classroom">
        <div>
          <Sidebar />
        </div>
        <div className="classroom-nav-items">
            <Navbar/>
          <Line/>
        </div>
      </div>
    </div>
  )
}

export default Myline