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
      <div className="w-full flex items-center justify-center py-4 bg-slate-50">
          <DatePicker 
            selected={startDate}
            selectsRange
            onChange={onChange}
            startDate={startDate}
            endDate={endDate}
            showDisabledMonthNavigation
            inline/>
        </div>
    </>
  )
}

export default Calendar
