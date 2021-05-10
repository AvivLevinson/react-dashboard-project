import React from "react";
import { PieChart, Pie, ResponsiveContainer,Cell, Tooltip, Legend} from 'recharts';



const CustomPie=()=>{

    
const COLORS = {
    Collaborator:'green',
    Uncollaborator:'red',
    Reporting_Incorrect_Data:'orange'

}


const pieData = [
    {
        "name": "Collaborator",
        "value": 25
    },
    {
        "name": "Uncollaborator",
        "value": 15
    },
    {
        "name": "Reporting_Incorrect_Data",
        "value": 17
    },
];




   const customTooltip = ({ active, payload, label }) => {
        if (active) {
            return (
                <div className="custom-tooltip" style={{ backgroundColor: '#ffff', padding: '5px', border: '1px solid #cccc' }}>
                    <label>{`${payload[0].name} : ${payload[0].value}%`}</label>
                </div>
            );
        }

        return null;
    };


    return(
        <div style={{ borderStyle:'solid', borderWidth:'1px', borderColor:'#E5E5E5', margin:'2px',boxShadow:' 0 2px 8px 0 rgba(0, 0, 0, 0.2)'}}> 
        <ResponsiveContainer width="100%" height={300}>
        <PieChart
         margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
        >
                <Pie data={pieData}  dataKey="value" nameKey="name"  outerRadius={100}  label >
                    {
                        pieData.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[entry.name]} label={entry.value}/>)
                    }
                </Pie>
                <Tooltip content={customTooltip} />
                <Legend />
            </PieChart>
      

       </ResponsiveContainer>
       </div>
    );
}

export default CustomPie;
