import React from 'react'
import Radar from '../Content/Radar';
import Navbar from '../Navbr/Navbar';



import Sidebar from "../Sidebar/Sidebar";

import "./Mycontent.css"

function Myradar() {
  return (
    <div>
    <div className="classroom">
      <div>
        <Sidebar />
      </div>
      <div className="classroom-nav-items">
        <Navbar/>
      <Radar/>
      </div>
    </div>
  </div>
  )
}

export default Myradar