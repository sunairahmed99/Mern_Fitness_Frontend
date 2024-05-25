import React, { useEffect } from 'react'
import CanvasJSReact from '@canvasjs/react-charts';
import { useDispatch, useSelector } from 'react-redux';
import { getallprogress, progressdata } from './fprogressslice';
//var CanvasJSReact = require('@canvasjs/react-charts');
var CanvasJSChart = CanvasJSReact.CanvasJSChart;


export default function FprogressChart() {
    let {progress} = useSelector(progressdata)
    let fitnessData = progress
    let dispatch = useDispatch()
    let token = localStorage.getItem('token')


    useEffect(()=>{

        dispatch(getallprogress(token))

    },[dispatch,token])
    


  
    const aggregatedData = {
        weight: 0,
        waist: 0,
        shoulder: 0,
        arms: 0,
        legs: 0,
        runTime: 0,
        liftingWeight: 0
    };

    fitnessData.forEach(entry => {
        aggregatedData.weight += entry.weight;
        aggregatedData.waist += entry.waist;
        aggregatedData.shoulder += entry.shoulder;
        aggregatedData.arms += entry.arms;
        aggregatedData.legs += entry.legs;
        aggregatedData.runTime += entry.runTime;
        aggregatedData.liftingWeight += entry.liftingWeight;
    });

    // Calculate the total sum of all metrics
const totalSum = Object.values(aggregatedData).reduce((sum, value) => sum + value, 0);

// Calculate the percentage for each metric
const dataPoints = Object.entries(aggregatedData).map(([key, value]) => ({
    y: (value / totalSum) * 100,
    label: key.charAt(0).toUpperCase() + key.slice(1) // Capitalize the first letter
}));
    
  
// Format the data for the pie chart
// const pieChartData = {
//     type: "pie",
//     indexLabel: "{label}: {y}%",
//     startAngle: -90,
//     dataPoints: dataPoints
// };

const options = {
    animationEnabled: true,
    exportEnabled: true,
    theme: "dark2", // "light1", "dark1", "dark2"
    title:{
        text: "Fitness Progress"
    },
    data: [{
        type: "pie",
        indexLabel: "{label}: {y}%",		
        startAngle: -90,
        dataPoints: dataPoints
    }]
}


  return (
    <div className='h-[100vh] bg-bgcolor'>

<div className='mt-[80px] pt-[30px]   h-[175vh]'>
			<CanvasJSChart className="h-[10000px]" options = {options} 
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>

    </div>
    
  )
}

