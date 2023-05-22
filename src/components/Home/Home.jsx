import React from 'react'
import './Home.scss'
import LogoEmpresaOrganizadora from '../../assets/imgHomeComp/logoOrgEve.png';
import FotoEmpresaOrganizadora from '../../assets/imgHomeComp/fotoHeader.png';
import RelojConferencias from '../../assets/imgHomeComp/relojConferencias.png'
import Footer from '../Footer/Footer';
import patr1 from '../../assets/imgHomeComp/patrocinadoresycreadorapp/patr1.png'
import patr2 from '../../assets/imgHomeComp/patrocinadoresycreadorapp/patr2.png'
import patr3 from '../../assets/imgHomeComp/patrocinadoresycreadorapp/patr3.png'
import patr4 from '../../assets/imgHomeComp/patrocinadoresycreadorapp/patr4.png'
import patr5 from '../../assets/imgHomeComp/patrocinadoresycreadorapp/patr5.png'
import patr6 from '../../assets/imgHomeComp/patrocinadoresycreadorapp/patr6.png'

const Home = () => {
  return (
    <div className='home-container'>
      <div className='logo-empresa-container'>{/* Empresa organizadora del evento */}
        <img className='logoEmpresa' src={LogoEmpresaOrganizadora} alt="Logo de la empresa" />
      </div>
      <div>
        <header className='header'>
          <img className='imgHeader' src={FotoEmpresaOrganizadora} alt="Foto de la empresa" />
          <p className='fechaEvento'>Valencia 20 y 21 de octubre</p>
          <p className='locEvento'>Ciudad de las Artes y las Ciencias Av. del Professor López Piñero, 7, Valencia </p>
        </header>
      </div>
      <div className='introEvent'>
        <h2 className='titleIntro'>Ftalks Food Summit 2023</h2>
        <p className='intro'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio odit eius, consequatur magni corrupti optio exercitationem. Enim, suscipit debitis? Praesentium consequatur vel reprehenderit! Modi voluptate quasi eveniet explicabo illum. Quo!</p>
      </div>
      <div className='conferencias'>
        <p className='title-conf'>Conferencias</p>
        <div className='conferencias-container'>
          {/* Cuando creen eventos que es a lo que creo que se refiere agregrar aqui las conferencias y relacionar las conferencias con los ponentes necesito categoria del evento,fecha y hora con el getAllEvents*/}
          <div className='confer-element-container'>
            <div className='confer-element'>
              <p className='catConf'>
                Innovación
              </p>
              <hr className='line-confer' />
              <div>
                <p>Lunes 21 de octubre</p>
                <div>
                  <img src={RelojConferencias} alt="icono reloj" />
                  <p>10.00h</p>
                </div>
              </div>
            </div>
          </div>
          <div className='confer-element-container'>
            <div  className='confer-element'>
              <p className='catConf'>
                Innovación
              </p>
              <hr className='line-confer' />
              <div>
                <p>Lunes 21 de octubre </p>
                <div>
                  <img src={RelojConferencias} alt="icono reloj" />
                  <p>10.00h</p>
                </div>
              </div>
            </div>
          </div>
          <div className='confer-element-container'>
            <div  className='confer-element'>
              <p className='catConf'>RSC</p>
              <hr className='line-confer'/>
              <div>
                <p>Lunes 21 de octubre</p>
                <div>
                  <img src={RelojConferencias} alt="icono reloj" />
                  <p>13.00h</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='ponentes-container'>
          <p className='ponentes-title'>Ponentes</p>
          <div className='ponentes-elements-container'>
            <div className='ponente-element'>
              <p className='headPonente'>Salud y bienestar</p>
              <div>
                <img className='imgPonente' src={FotoEmpresaOrganizadora} alt="" />
              </div>
              <p className='datesPonente'> Nombre Apellido Cargo empresa </p>

            </div>
            <div className='ponente-element'>
              <p  className='headPonente'>Salud y bienestar</p>
              <div>
                <img  className='imgPonente' src={FotoEmpresaOrganizadora} alt="" />
              </div>
              <p  className='datesPonente'> Nombre Apellido Cargo empresa </p>
            </div>
            <div className='ponente-element'>
              <p  className='headPonente'>Salud y bienestar</p>
              <div>
                <img className='imgPonente' src={FotoEmpresaOrganizadora} alt="" />
              </div>
              <p  className='datesPonente'> Nombre Apellido Cargo empresa </p>
            </div>
          </div>
        </div>
        <footer className='footer-home'>
          {/* patrocinadores del evento en este caso ponemos ejemplos de figma */}
          <div className='patr-block-1'>
            <img className='ptr1' src={patr1} alt="" />
            <img className='ptr2' src={patr2} alt="" />
            <img className='ptr3' src={patr3} alt="" />
          </div>
          <div className='patr-block-2'>
            <img className='ptr4' src={patr4} alt="" />
            <img className='ptr5' src={patr5} alt="" />
            <img className='ptr6' src={patr6} alt="" />
            </div>
          {/* creador de la app */}
          <div className='creadorDiv'>
           <p className='hechoPor'>Powered by</p>
           <p className='nombreCreador'>Feevents</p>
          </div>
        </footer>
      </div>
      <div className='footer-div'>
        <Footer />
      </div>
    </div>
  )
}

export default Home