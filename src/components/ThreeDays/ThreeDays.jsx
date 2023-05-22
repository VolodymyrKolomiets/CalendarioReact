import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Calendar from '../../assets/icons/Calendar.png';
import Dropdown from '../../assets/icons/Dropdown.png';
import Bell from '../../assets/icons/Bell.png';
import Lens from '../../assets/icons/Lens.png';
import moveright from '../../assets/icons/moveright.png';
import moveleft from '../../assets/icons/moveleft.png';
import IconAdd from '../../assets/icons/plus.png';
import './ThreeDays.scss';
import Footer from '../Footer/Footer';

const ThreeDays = () => {

  const timeSlots = [];
  let currentTime = new Date();
  currentTime.setHours(7, 0, 0, 0);

  while (currentTime.getHours() <= 22) {
    const hour = currentTime.getHours();
    timeSlots.push(`${hour}:00`);
    currentTime.setHours(hour + 1);
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

  const isToday = (date) => {
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  };

  const handleGoBookings = () => {
    navigate('/SingleDayBooking');
  };



  return (

    <div className='calendar-container'>
      <div className='principal-div'></div>

      <div className='calendar-top-position'>

        <div className='calendar-header'>
          <div className='calendar-header-left'>
            <div className='div-icon-calendar'>
              <img src={Calendar} alt='Register' className='icon-calendar' />
            </div>
            <div className='div-text-dropdown'>
              <p className='text-calendar'>3 Dias</p>
              <button onClick={handleGoBack} className='dropdown-button'>
                <img src={Dropdown} alt='Register' className='icon-dropdown' />
              </button>
            </div>
          </div>
          <div className='calendar-header-right'>
            <div className='div-icon-lens'>
              <img src={Lens} alt='Register' className='icon-lens' />
            </div>
            <div className='div-icon-bell'>
              <img src={Bell} alt='Register' className='icon-bell' />
            </div>
          </div>
        </div>



        <div className='calendar-3day-complete'>
          <div className='calendar-body'>
            <div className='calendar-navigation'>
              <button onClick={handlePreviousDay} className='previous3day'>
                <img src={moveleft} alt='Previous' className='button-icon' />
              </button>
              <div className='calendar-dates'>
                {/* Renderizar los tres días */}
                {threeDays.map((day, index) => (
                  <div
                    key={index}
                    className={`div-day${index + 1} ${day && isToday(day) ? 'current-day' : ''}`}
                  >
                    <p className={`number-day${index + 1}`}>{day ? day.getDate() : '-'}</p>
                    <p className={`day${index + 1}-calendar`}>
                      {day
                        ? day.toLocaleDateString([], { weekday: 'short' }).charAt(0).toUpperCase() +
                        day.toLocaleDateString([], { weekday: 'short' }).slice(1)
                        : '-'}
                    </p>
                  </div>
                ))}
              </div>
              <button onClick={handleNextDay} className='Next3day'>
                <img src={moveright} alt='Move Right' className='button-icon2' />
              </button>
            </div>
          </div>
        </div>

      </div>
      <div className='calendar-hours'>
        <div className='calendar-timeslots'>
          {/* Renderizar los intervalos de tiempo */}
          {timeSlots.map((timeSlot, index) => (
            <div key={index} className='calendar-timeslot'>
              {timeSlot}
            </div>
          ))}
        </div>
      </div>

      <div className='div-button-add'>
        <button onClick={handleGoBookings} className='image-button-add'>
          <img src={IconAdd} alt='addBooking' className='button-addbooking' />
        </button>
      </div>


      <div className='footer-div'>
        <Footer />
      </div>
    </div>


  );
};

export default ThreeDays;








