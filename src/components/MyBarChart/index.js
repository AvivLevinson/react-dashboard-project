import React from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
  } from "recharts";

  import { useData } from "../../context/DataContext";


const MyBarChart = ()=> {

  const { globalInfo } = useData();


  const data = [
    {
      name: "Symptoms",
      symptoms: globalInfo.positiveWithSympyoms,
    },
    {
      name: "No-Symptoms",
      noSymptoms: globalInfo.positiveWithOutSympyoms,

    },
    {
      name: "Negative",
      negative: globalInfo.negative,

    },
    
  ];


    return (
        <div style={{ borderStyle:'solid', borderWidth:'1px', borderColor:'#E5E5E5', margin:'2px',boxShadow:' 0 2px 8px 0 rgba(0, 0, 0, 0.2)'}}>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
        data={data}
        barSize={60}
        margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
        barGap={25}
      >
        <XAxis  dataKey="name" padding={{ left: 10, right: 10 }} />
        <YAxis />
        <Tooltip />
        <Legend layout='horizontal'   />
        <CartesianGrid strokeDasharray="2" />
        <Bar  dataKey="symptoms" fill="#FF5143" label={{ fill: 'black', fontSize: 15 }} />
        <Bar dataKey="noSymptoms" fill='#FFB946' label={{ fill: 'black', fontSize: 15 }}/>
        <Bar dataKey="negative" fill="#2ED47A"  label={{ fill: 'black', fontSize: 15 }}/>
      </BarChart>
      </ResponsiveContainer>    
      </div>
  
    );
  
}

export default MyBarChart;
