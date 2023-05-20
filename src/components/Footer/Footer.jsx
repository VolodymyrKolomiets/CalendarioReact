import React from 'react'
import './Footer.scss';
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div>
      <Link to={'/'}>Home</Link>
      <Link to={'/matches'}>Matches</Link>
      <Link to={'/chat'}>Chat</Link>
      <Link to={'/calendar'}>Calendar</Link>
      <Link to={'/profile'}>Profile</Link>
      </div>
  )
}

export default Footer