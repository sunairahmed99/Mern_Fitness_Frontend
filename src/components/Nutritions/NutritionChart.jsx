import React, { useEffect } from 'react'
import CanvasJSReact from '@canvasjs/react-charts';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNutrition, nutritiondata } from './nutritionSlice';
//var CanvasJSReact = require('@canvasjs/react-charts');
var CanvasJSChart = CanvasJSReact.CanvasJSChart;


export default function NutritionChart() {
    let {nutrition} = useSelector(nutritiondata)
    let foodData  = nutrition
    let dispatch = useDispatch()
    let token = localStorage.getItem('token')


    useEffect(()=>{

        dispatch(fetchNutrition(token))

    },[dispatch,token])
    


    // const fitnessData = [
    //     {
    //         "_id": "664cf6d65a019c86295019a1",
    //         "userId": {
    //             "_id": "664af9b156fc44de144313a0",
    //             "name": "sunair",
    //             "email": "sunair21@gmail.com",
    //             "role": "user",
    //             "__v": 0,
    //             "passwordchangeDate": "2024-05-22T19:36:05.829Z",
    //             "image": "Users/1716398076117avatar1.jpg",
    //             "phone": 3082011585
    //         },
    //         "weight": 60,
    //         "waist": 4,
    //         "shoulder": 11,
    //         "arms": 10,
    //         "legs": 10,
    //         "runTime": 2,
    //         "liftingWeight": 5,
    //         "createdate": "2024-05-21T19:32:38.374Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "664cf767ea5100fbcfd8564d",
    //         "userId": {
    //             "_id": "664af9b156fc44de144313a0",
    //             "name": "sunair",
    //             "email": "sunair21@gmail.com",
    //             "role": "user",
    //             "__v": 0,
    //             "passwordchangeDate": "2024-05-22T19:36:05.829Z",
    //             "image": "Users/1716398076117avatar1.jpg",
    //             "phone": 3082011585
    //         },
    //         "weight": 60,
    //         "waist": 4,
    //         "shoulder": 11,
    //         "arms": 10,
    //         "legs": 10,
    //         "runTime": 2,
    //         "liftingWeight": 5,
    //         "createdate": "2024-05-21T19:32:38.374Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "664d975fea5100fbcfd8565d",
    //         "userId": {
    //             "_id": "664af9b156fc44de144313a0",
    //             "name": "sunair",
    //             "email": "sunair21@gmail.com",
    //             "role": "user",
    //             "__v": 0,
    //             "passwordchangeDate": "2024-05-22T19:36:05.829Z",
    //             "image": "Users/1716398076117avatar1.jpg",
    //             "phone": 3082011585
    //         },
    //         "weight": 60,
    //         "waist": 4,
    //         "shoulder": 11,
    //         "arms": 10,
    //         "legs": 10,
    //         "runTime": 2,
    //         "liftingWeight": 5,
    //         "createdate": "2024-05-21T19:32:38.374Z",
    //         "__v": 0
    //     }
    // ];

    const aggregatedData = foodData.reduce((acc, item) => {
        if (!acc[item.foodType]) {
            acc[item.foodType] = 0;
        }
        acc[item.foodType] += item.calories;
        return acc;
    }, {});
    
    // Transform into the required format
    const dataPoints = Object.keys(aggregatedData).map(foodType => ({
        y: aggregatedData[foodType],
        label: foodType
    }));

    const options = {
        animationEnabled: true,
        exportEnabled: true,
        theme: "dark2", // "light1", "dark1", "dark2"
        title:{
            text: "Nutrition Progress"
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
