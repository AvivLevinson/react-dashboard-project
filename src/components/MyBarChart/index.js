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

  const data = [
    {
      name: "Symptoms",
      symptoms: 100,
    },
    {
      name: "No-Symptoms",
      noSymptoms: 50,

    },
    {
      name: "Negative",
      negative: 120,

    },
    
  ];

  const data2= [ {symptoms: 100,noSymptoms: 50,negative: 120,}]
  

const MyBarChart = ()=> {



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
        <Bar  dataKey="symptoms" fill="red" label={{ fill: 'black', fontSize: 18 }} />
        <Bar dataKey="noSymptoms" fill="orange" label={{ fill: 'black', fontSize: 18 }}/>
        <Bar dataKey="negative" fill="green"  label={{ fill: 'black', fontSize: 18 }}/>
      </BarChart>
      </ResponsiveContainer>    
      </div>
  
    );
  
}

export default MyBarChart;
