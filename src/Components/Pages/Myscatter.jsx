import React from 'react'
import { NavLink } from 'react-router-dom';

import Scatter from '../Content/Scatter';



import Sidebar from "../Sidebar/Sidebar";

import "./Mycontent.css"

function Myscatter() {
  return (
    <div>
    <div className="classroom">
      <div>
        <Sidebar />
      </div>
      <div className="classroom-nav-items">
        <NavLink/>
 <Scatter/>
      </div>
    </div>
  </div>
  )
}

export default Myscatter