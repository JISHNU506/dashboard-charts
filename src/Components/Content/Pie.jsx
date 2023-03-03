import React from 'react'
import "./Content.css";
import Chart from "react-apexcharts";
import { useState } from "react";

function Pie() {
    const [State, setState] = useState({
        options: {},
        series: [44, 55, 41, 17, 15],
        labels: ['A', 'B', 'C', 'D', 'E']
      });
  return (
    <div className="content-wrapper">
    <div class="columns">
               <h2>Donut Type</h2>
               <Chart
                 options={State.options}
                 series={State.series}
                 type="donut"
                 width="450"
               />
             </div>
       </div>
  )
}

export default Pie