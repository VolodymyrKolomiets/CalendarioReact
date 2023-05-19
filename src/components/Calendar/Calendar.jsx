import React, { useState } from 'react';
import './Calendar.scss'; // Archivo de estilos para el calendario

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  // Lógica para seleccionar una fecha
  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  // Lógica para obtener el mes actual y generar los días del calendario
  const generateCalendarDays = () => {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();

    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const firstDayIndex = new Date(currentYear, currentMonth, 1).getDay();

    const days = [];
    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(currentYear, currentMonth, i);
      const isSelected = selectedDate && date.toDateString() === selectedDate.toDateString();

      days.push({ number: i, date, isSelected });
    }

    // Rellena los días previos al primer día del mes
    for (let i = 0; i < firstDayIndex; i++) {
      const date = new Date(currentYear, currentMonth, -i);
      days.unshift({ number: date.getDate(), date, isSelected: false });
    }

    // Rellena los días posteriores al último día del mes
    const lastDayIndex = new Date(currentYear, currentMonth, daysInMonth).getDay();
    for (let i = 1; i <= 6 - lastDayIndex; i++) {
      const date = new Date(currentYear, currentMonth, daysInMonth + i);
      days.push({ number: date.getDate(), date, isSelected: false });
    }

    return days.map((day) => (
      <div
        key={day.date}
        className={`calendar-day${day.isSelected ? ' selected' : ''}`}
        onClick={() => handleDateClick(day.date)}
      >
        {day.number}
      </div>
    ));
  };

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <button>{'<'}</button>
        <h2>Mayo 2023</h2>
        <button>{'>'}</button>
      </div>
      <div className="calendar-days">{generateCalendarDays()}</div>
    </div>
  );
};

export default Calendar;

