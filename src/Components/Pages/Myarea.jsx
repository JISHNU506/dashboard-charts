import React from 'react'

import Area from '../Content/Area';
import Navbar from '../Navbr/Navbar';



import Sidebar from "../Sidebar/Sidebar";

import "./Mycontent.css"


function Myarea() {
  return (
    <div>
    <div className="classroom">
      <div>
        <Sidebar />
      </div>
      <div className="classroom-nav-items">
        <Navbar/>
       <Area/>
      </div>
    </div>
  </div>
   
  )
}

export default Myarea