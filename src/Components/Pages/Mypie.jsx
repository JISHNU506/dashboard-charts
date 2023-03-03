import React from 'react'
import Pie from '../Content/Pie';
import Navbar from '../Navbr/Navbar';




import Sidebar from "../Sidebar/Sidebar";

import "./Mycontent.css"

function Mypie() {
  return (
    <div>
    <div className="classroom">
      <div>
        <Sidebar />
      </div>
      <div className="classroom-nav-items">
        <Navbar/>
       <Pie/>
      </div>
    </div>
  </div>
  )
}

export default Mypie