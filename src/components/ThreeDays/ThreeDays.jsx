import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

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
      <div className='calendar-navigation'>
        <button onClick={handlePreviousDay}>&lt; Previous</button>
        <button onClick={handleNextDay}>Next &gt;</button>
        <button onClick={handleGoBack}>Go Back to Calendar</button>
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










