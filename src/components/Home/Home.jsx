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
    <div>
      <div>{/* Empresa organizadora del evento */}
        <img src={LogoEmpresaOrganizadora} alt="Logo de la empresa" />
      </div>
      <div>
        <header>
          <img src={FotoEmpresaOrganizadora} alt="Foto de la empresa" />
          <p>Valencia 20 y 21 de octubre</p>
          <p>Ciudad de las Artes y las Ciencias Av. del Professor López Piñero, 7, Valencia </p>
        </header>
      </div>
      <div className='introEvent'>
        <h2>Ftalks Food Summit 2023</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio odit eius, consequatur magni corrupti optio exercitationem. Enim, suscipit debitis? Praesentium consequatur vel reprehenderit! Modi voluptate quasi eveniet explicabo illum. Quo!</p>
      </div>
      <div className='conferencias'>
        <p>Conferencias</p>
        <div className='conferencias-container'>
          {/* Cuando creen eventos que es a lo que creo que se refiere agregrar aqui las conferencias y relacionar las conferencias con los ponentes necesito categoria del evento,fecha y hora con el getAllEvents*/}
          <div className='conferencia-element'>
            <div>
              <p>
                Innovación
              </p>
              <hr />
              <div>
                <p>Lunes 21 de octubre</p>
                <div>
                  <img src={RelojConferencias} alt="icono reloj" />
                  <p>10.00h</p>
                </div>
              </div>
            </div>
          </div>
          <div className='conferencia-element'>
            <div>
              <p>
                Innovación
              </p>
              <hr />
              <div>
                <p>Lunes 21 de octubre </p>
                <div>
                  <img src={RelojConferencias} alt="icono reloj" />
                  <p>10.00h</p>
                </div>
              </div>
            </div>
          </div>
          <div className='conferencia-element'>
            <div>
              <p>RSC</p>
              <hr />
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
          <p>Ponentes</p>
          <div className='ponentes-elements'>
            <div>
              <p>Salud y bienestar</p>
              <div>
                <img src={FotoEmpresaOrganizadora} alt="" />
              </div>
              <p> Nombre Apellido Cargo empresa </p>

            </div>
            <div>
              <p>Salud y bienestar</p>
              <div>
                <img src={FotoEmpresaOrganizadora} alt="" />
              </div>
              <p> Nombre Apellido Cargo empresa </p>
            </div>
            <div>
              <p>Salud y bienestar</p>
              <div>
                <img src={FotoEmpresaOrganizadora} alt="" />
              </div>
              <p> Nombre Apellido Cargo empresa </p>
            </div>
          </div>
        </div>
        <footer>
          {/* patrocinadores del evento en este caso ponemos ejemplos de figma */}
          <div>
            <img src={patr1} alt="" />
            <img src={patr2} alt="" />
            <img src={patr3} alt="" />
          </div>
          <div>
            <img src={patr4} alt="" />
            <img src={patr5} alt="" />
            <img src={patr6} alt="" />
            </div>
          {/* creador de la app */}
          <div>
           <p>Powered by</p>
           <p>Feevents</p>
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