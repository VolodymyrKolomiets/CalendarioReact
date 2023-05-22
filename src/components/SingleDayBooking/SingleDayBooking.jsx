import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { addDays, isSameDay } from 'date-fns';
import LeftMax from '../../assets/icons/leftMax.png';
import Bell from '../../assets/icons/Bell.png';
import Lens from '../../assets/icons/Lens.png';
import moveright from '../../assets/icons/moveright.png';
import moveleft from '../../assets/icons/moveleft.png';
import './SingleDayBooking.scss';
import Footer from '../Footer/Footer';

const SingleDayBooking = () => {
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

  const [startDate, setStartDate] = useState(selectedDate);

  const handlePreviousDay = () => {
    const previousDay = addDays(startDate, -1);
    setStartDate(previousDay);
  };

  const handleNextDay = () => {
    const nextDay = addDays(startDate, 1);
    setStartDate(nextDay);
  };

  const handleGoBack = () => {
    navigate('/calendarThree');
  };

  const isToday = (date) => {
    const today = new Date();
    return isSameDay(date, today);
  };

  const consecutiveDates = Array.from({ length: 14 }, (_, index) => addDays(startDate, index));

  useEffect(() => {
    navigate(`/singleDayBooking?date=${encodeURIComponent(startDate.toISOString())}`);
  }, [startDate, navigate]);

  return (
    <div className='single-day-booking-container'>
      <div className='principal-div'></div>

      <div className='single-day-booking-header'>
        <button onClick={handleGoBack} className='calendar-header-left14'>
          <img src={LeftMax} alt='Register' className='icon-back-left' />
          <div className='div-text-date'>
            <p className='text-calendar14'>{startDate.toLocaleDateString([], { month: 'short', year: 'numeric' }).toLocaleLowerCase().replace(/^\w/, (c) => c.toUpperCase())}</p>
          </div>
        </button>
        <div className='calendar-header-center14'>
          <div className='single-day-booking-navigation'>
            <button onClick={handlePreviousDay} className='previous14day'>
              <img src={moveleft} alt='Previous' className='button-icon14' />
            </button>
            <button onClick={handleNextDay} className='Next14day'>
              <img src={moveright} alt='Move Right' className='button-icon214' />
            </button>
          </div>
        </div>
        <div className='calendar-header-right14'>
          <div className='div-icon-lens'>
            <img src={Lens} alt='Register' className='icon-lens' />
          </div>
          <div className='div-icon-bell'>
            <img src={Bell} alt='Register' className='icon-bell' />
          </div>
        </div>
      </div>


      <div className='calendar-14day-complete'>
        <div className='single-day-booking-body'>

          <div className='single-day-booking-content'>
            <div className='calendar-dates14'>
              <div className='row'>
                {consecutiveDates.slice(0, 7).map((date, index) => (
                  <div key={date.toISOString()} className={`div-day${index + 1} ${isToday(date) ? 'current-day14' : ''}`}>
                    <p className={`number-day${index + 1}`}>{date.getDate()}</p>
                    <p className={`day${index + 1}-calendar`}>
                      {date.toLocaleDateString([], { weekday: 'short' }).charAt(0).toUpperCase() +
                        date.toLocaleDateString([], { weekday: 'short' }).slice(1)}
                    </p>
                  </div>
                ))}
              </div>
              <div className='row'>
                {consecutiveDates.slice(7, 14).map((date, index) => (
                  <div key={date.toISOString()} className={`div-day${index + 8} ${isToday(date) ? 'current-day14' : ''}`}>
                    <p className={`day${index + 8}-calendar`}>
                      {date.toLocaleDateString([], { weekday: 'short' }).charAt(0).toUpperCase() +
                        date.toLocaleDateString([], { weekday: 'short' }).slice(1)}
                    </p>
                    <p className={`number-day${index + 8}`}>{date.getDate()}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className='footer-div'>
        <Footer />
      </div>
    </div>
  );
};

export default SingleDayBooking;



