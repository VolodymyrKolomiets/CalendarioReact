import React, { useContext, useEffect, useState } from 'react';
import './Footer.scss';
import { Link } from "react-router-dom";
import Home from '../../assets/icons/HomeMenu.png';
import Matches from '../../assets/icons/MatchesMenu.png';
import Chats from '../../assets/icons/ChatsMenu.png';
import Calendar from '../../assets/icons/CalendarMenu.png';
import PerfilMenuSimulacion from '../../assets/icons/PerfilMenuSimulacion.png';
import { UserContext } from "../../context/UserContext/UserState";

const Footer = () => {
  const { getUserInfo, token, user } = useContext(UserContext);
  const [imgPerfil, setImgPerfil] = useState(PerfilMenuSimulacion);
//ajustarlo cuando tenga los datos de la base de datos
  useEffect(() => {
    if (token) {
      getUserInfo();
    }
  }, [token, getUserInfo]);

  useEffect(() => {
    if (user && user.img) {
      setImgPerfil(user.img);
    }
  }, [user]);

  return (
    <div className='footer-component'>
      <div className='footer-container'>
        <div className='footer-elements'>
          <div className='home-element'>
            <Link to={'/'}><div className='div-imgHome'><img className='img-home' src={Home} alt='Home' /></div><p className='text-home'>Home</p></Link>
          </div>
          <div className='matches-element'>
            <Link to={'/matches'}><div className='div-imgMatches'><img className='img-matches' src={Matches} alt='Matches' /></div><p className='text-matches'>Matches</p></Link>
          </div>
          <div className='chat-element'>
            <Link to={'/chat'}><img className='img-chats' src={Chats} alt='Chats' /><p className='text-chats'>Chat</p></Link>
          </div>
          <div className='cal-container'>
            <div className='cal-element'>
              <Link to={'/calendar'}><img className='img-cal' src={Calendar} alt='Calendar' /><p className='text-cal'>Agenda</p></Link>
            </div>
          </div>
          <div className='profile-element'>
            <Link to={'/profile'}><div className='div-imgProfile'><img src={imgPerfil} className='img-profile' alt='Profile' /></div><p className='text-profile'>Perfil</p></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
