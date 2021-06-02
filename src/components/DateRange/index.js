import React,{useState} from 'react';

import { DatePicker, Button } from 'antd';
import { useData } from "../../context/DataContext";


const { RangePicker } = DatePicker;

const DateRange = ()=>{
const { filterUsersByDate } = useData();
const [datesRange, setDatesRanges] = useState([]);


const onChange = (dates, dateStrings)=>{
    if(dates){
        console.log(dates[0].format('DD-MM-YYYY'))
        console.log(dates[1].format('DD-MM-YYYY'))

        //moments object
        setDatesRanges([dates[0].format('DD-MM-YYYY'),dates[1].format('DD-MM-YYYY')]);
    }
}

const filterDates = ()=>{
    filterUsersByDate(datesRange)


}

return(
    <div style={{display: 'flex', flexDirection:'row'}}>
            <RangePicker
      format={'DD/MM/YYYY'}
      onChange   = {onChange}
      showToday={true}
    />
    <Button onClick={filterDates}>filter</Button>
    </div>

    );
}

export default DateRange;