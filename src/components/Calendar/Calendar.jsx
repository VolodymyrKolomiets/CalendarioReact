import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useNavigate } from 'react-router-dom';
import './Calendar.scss';

function CalendarView() {
  const [selectedDate, setSelectedDate] = useState(null);
  const navigate = useNavigate();

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  useEffect(() => {
    if (selectedDate) {
      navigate(`/calendarThree?date=${encodeURIComponent(selectedDate.toISOString())}`);
    }
  }, [selectedDate, navigate]);

  return (
    <div className='app'>
      <div className='calendar-container'>
        <Calendar className='react-calendar' onChange={handleDateClick} value={selectedDate} />
      </div>
      {selectedDate && (
        <p className='text-center'>
          <span className='bold'>Selected date:</span> {selectedDate.toDateString()}
        </p>
      )}
    </div>
  );
}

export default CalendarView;

















