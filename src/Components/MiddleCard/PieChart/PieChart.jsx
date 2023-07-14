import React from "react";
import ReactApexChart from "react-apexcharts";
import { GoDotFill } from "react-icons/go";
import './PieChart.css'
const PieChart = () => {
  const chartOptions = {
    series: [22, 20, 7, 22, 37],
    colors: ["#B4CEFF", "#8400D5", "#3333334D", "#425F57", "#8400D5"],
    legend: {
      show: false,
    },
    chart: {
      width: 300,
      type: "donut",
    },
    plotOptions: {
      pie: {
        donut: {
          size: "40%",
        },
      },
    },
  };

  return (
    
      <div className="donut-chart">
        <p className="pieChartHeading">Chapter Wise Status</p>
        <ReactApexChart
          options={chartOptions}
          series={chartOptions.series}
          type="donut"
          width={chartOptions.chart.width}
          className="dountChart"
        />
        <div className="Ratio">
        <div>
          <li>
            <GoDotFill className="" style={{color:"#B4CEFF"}}/>
            <p>Finished Training</p>
          </li>
          <li>
            <GoDotFill className="" style={{color:"#8400D5"}}/>
            <p>Chapater B</p>
          </li>
          <li>
            <GoDotFill className="" style={{color:"red"}}/>
            <p>Haven't Started Yet</p>
          </li>
        </div>
        <div>
          <li>
            <GoDotFill className="" style={{color:"#3333334D"}}/>
            <p>Chapter A</p>
          </li>
          <li>
            <GoDotFill className="" style={{color:"#425F57"}}/>
            <p>Chapater </p>
          </li>
        </div>
      </div>
      </div>
      
    
  );
};

export default PieChart;
