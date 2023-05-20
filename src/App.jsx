import React from "react";
import './App.scss'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserProvider } from "./context/UserContext/UserState";
import { EventProvider } from './context/EventContext/EventState';
import { BookingProvider } from './context/BookingContext/BookingState';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Calendar from "./components/Calendar/Calendar";
import Profile from './components/Profile/Profile';
import DayHours from './components/SingleDayHours/SingleDayHours';
import DayBookings from './components/SingleDayBooking/SingleDayBooking'
import ThreeDays from "./components/ThreeDays/ThreeDays";
import Request from "./components/Request/Request";



function App() {

  return (

    <BrowserRouter>
      <UserProvider>
        <EventProvider>
          <BookingProvider>
            <Routes>
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/dayHours" element={<DayHours />} />
              <Route path="/dayBookings" element={<DayBookings />} />
              <Route path="/calendarThree" element={<ThreeDays />} />
              <Route path="/request" element={<Request />} />
            </Routes>
          </BookingProvider>
        </EventProvider>
      </UserProvider>
    </BrowserRouter>
  )
}

export default App
