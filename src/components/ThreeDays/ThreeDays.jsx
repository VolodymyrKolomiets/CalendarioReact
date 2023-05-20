import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Calendar from '../../assets/icons/Calendar.png';
import Dropdown from '../../assets/icons/Dropdown.png'

const ThreeDays = () => {
  const timeSlots = [];
  let currentTime = new Date();
  currentTime.setHours(7, 0, 0, 0);

  while (currentTime.getHours() <= 22) {
    timeSlots.push(currentTime.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' }));
    currentTime.setMinutes(currentTime.getMinutes() + 30);
  }

  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const selectedDateParam = searchParams.get('date');
  const selectedDate = selectedDateParam ? new Date(selectedDateParam) : new Date();

  // Validar que selectedDate sea una instancia de Date válida
  const isValidDate = selectedDate instanceof Date && !isNaN(selectedDate);

  // Crear un array con los tres días seleccionados si selectedDate es válido
  const threeDays = isValidDate
    ? [selectedDate, new Date(selectedDate), new Date(selectedDate)]
    : [null, null, null];

  if (isValidDate) {
    threeDays[1].setDate(threeDays[1].getDate() + 1);
    threeDays[2].setDate(threeDays[2].getDate() + 2);
  }

  const handlePreviousDay = () => {
    const previousDay = new Date(selectedDate);
    previousDay.setDate(previousDay.getDate() - 1);
    navigate(`/calendarThree?date=${encodeURIComponent(previousDay.toISOString())}`);
  };

  const handleNextDay = () => {
    const nextDay = new Date(selectedDate);
    nextDay.setDate(nextDay.getDate() + 1);
    navigate(`/calendarThree?date=${encodeURIComponent(nextDay.toISOString())}`);
  };

  const handleGoBack = () => {
    navigate('/calendar');
  };

  return (
    <div className='calendar-container'>
      <div className='calendar-header'>

        <div className='calendar-header-left'>
          <div className='div-icon-calendar'>
            <img src={Calendar} alt="Register" className='icon-calendar' />
          </div>
          <div className='div-text-dropdown'>
            <p className='text-calendar'>3 Dias</p>
            <div className='div-icon-dropdown'>
              <img src={Dropdown} alt="Register" className='icon-dropdown' />
              <button onClick={handleGoBack}>Go Back to Calendar</button>
            </div>
          </div>
        </div>

        
        <div className='calendar-header-right'>


        </div>


      </div>

      <div className='calendar-navigation'>
        <button onClick={handlePreviousDay}>&lt; Previous</button>
        <button onClick={handleNextDay}>Next &gt;</button>
      </div>
      <div className='calendar-dates'>
        {/* Renderizar los tres días */}
        {threeDays.map((day, index) => (
          <div key={index} className='calendar-date'>
            {day ? day.toLocaleDateString([], { weekday: 'short', month: 'numeric', day: 'numeric' }) : '-'}
          </div>
        ))}
      </div>
      <div className='calendar-timeslots'>
        {/* Renderizar los intervalos de tiempo */}
        {timeSlots.map((timeSlot, index) => (
          <div key={index} className='calendar-timeslot'>
            {timeSlot}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThreeDays;










