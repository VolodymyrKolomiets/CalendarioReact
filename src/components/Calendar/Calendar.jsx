import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useNavigate } from 'react-router-dom';
import './Calendar.scss';
import Footer from '../Footer/Footer';

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
    <div className='calendar'>
      <div className='calendar-container'>
        <Calendar className='react-calendar' onChange={handleDateClick} value={selectedDate} />
      </div>
      
      <div className='footer-div'>
        <Footer/>
      </div>
    </div>
  );
}

export default CalendarView;

















