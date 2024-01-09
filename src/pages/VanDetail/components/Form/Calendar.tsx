import React from 'react';
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.module.css';

type CalendarProps = {
    startDate: Date,
    endDate: null,
    onChange:(dates: any) => void,
}

const Calendar = ({startDate, endDate, onChange}:CalendarProps) => {
  return (
    <>
      <DatePicker 
        selected={startDate}
        selectsRange
        onChange={onChange}
        startDate={startDate}
        endDate={endDate}
        showDisabledMonthNavigation
        inline/>
    </>
  )
}

export default Calendar
