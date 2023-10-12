import React from 'react'
import { Doughnut } from 'react-chartjs-2';



const BarChart = ({ chartData }) => {
    const options = {
        cutoutPercentage: 10,
        responsive: true,
        legend: {
          display: true,
          position: "right"
        }
    }
    return (
        <div style={{width:"300px",height:"300px"}} className='doughbar'>
            <Doughnut data={chartData} options={options}/>
        </div>
    )
}

export default BarChart