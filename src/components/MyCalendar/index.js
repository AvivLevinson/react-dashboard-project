import React from 'react';
import { Calendar } from 'antd';




const MyCalendar = ()=>{

    const  onPanelChange = (value, mode)=>{
        console.log(value, mode);
    }

return(
    <div style={{width: 'auto' ,borderStyle:'solid', borderWidth:'1px', borderColor:'#E5E5E5', margin:'5px',boxShadow:' 0 2px 2px 0 rgba(0, 0, 0, 0.2)'}} >
    <Calendar fullscreen={false} onPanelChange={onPanelChange} />
  </div>
);
}
export default MyCalendar;
