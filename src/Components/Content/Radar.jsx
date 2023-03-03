import React from 'react'
import "./Content.css";
import Chart from "react-apexcharts";
import { useState } from "react";

function Radar() {
    const [State, setState] = useState({
        options: {
          chart: {
            id: "basic-bar",
          },
          xaxis: {
            categories: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017],
          },
        },
        series: [
          {
            name: "series-1",
            data: [30, 40, 45, 50, 49, 60, 70, 91],
          },
          {
            name: "series-2",
            data: [80, 60, 50, 40, 29, 25, 18, 11],
          },
        ],
      });
  return (
    <div className="content-wrapper">
 <div class="columns">
            <h2>Radar Type</h2>
            <Chart
              options={State.options}
              series={State.series}
              type="radar"
              width="450"
            />
          </div>
    </div>
  )
}

export default Radar