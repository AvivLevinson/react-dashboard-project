import React, { useState, useEffect } from "react";
import { Calendar } from 'antd';

import moment from "moment";

import {useData} from '../../context/DataContext';

const CustomCalendar = () => {

    const {getDataByDate} = useData();

    const [date,setDate] = useState(moment());
    const [selectedDate, setSelectedDate]= useState(moment());

  
    const onPanelChange = (value, mode) => {
    console.log(value, mode);
    setDate( value );
  };

  
  const onSelect = (value) => {
    const date = value.format('DD-MM-YYYY');
    console.log('this is selsted date:', date);
    getDataByDate(date)
    //setSelectedDate(date);

  };




  useEffect(()=>{
    console.log('useEffect CustomCalendar');
    const date = moment();
    console.log(date.format('DD-MM-YYYY'));

  },[])






  return (
    <div
      style={{
        width: "auto",
        borderStyle: "solid",
        borderWidth: "1px",
        borderColor: "#E5E5E5",
        margin: "5px",
        boxShadow: " 0 2px 2px 0 rgba(0, 0, 0, 0.2)",
      }}
    >
      <Calendar
        value = {date}
        fullscreen={false}
        onPanelChange={onPanelChange}
        onSelect={onSelect}  
            />
    </div>
  );
};
export default CustomCalendar;
