import React from 'react'
import './Meeting.scss'
import Footer from '../Footer/Footer'
import { AlignRightOutlined, ClockCircleFilled, DownOutlined, PlusOutlined } from '@ant-design/icons'

const Meeting = () => {
  return (
    <div className='principal-container-meeting'>
      <div className='container-meeting'>
        <div className='title-meeting-principal-container' >
          <div className='title-meeting-container'>
            <input type="text" className='titel-input'   placeholder="Añade un título" />
          </div>
          <div className='meeting-line'></div>
        </div>
        <div className='description-meeting-principal-container'>
          <div className='description-meeting-container'>
         <div className='description-icon'> <AlignRightOutlined /> </div>
          <input type="text" className='description-input' placeholder='Descripción' />
          </div>
          <div className='meeting-line'></div>
        </div>
        <div className='date-meeting-principal-container'>
          <div className='date-meeting-container'>
        <div ><ClockCircleFilled className="gris" /></div>
        <div className='meeting-date'>Martes , 12 Mayo, 16:00</div>{/* un map. para sacar la info de los dias */}
        <div ><DownOutlined className="gris" /></div>
        </div>
        <div className='meeting-line'></div>
        </div>
        <div className='participants-meeting-principal-container'>
          <div className='participants-meeting-container'>
            <div className='plus-icon-meeting'><PlusOutlined /></div>
            <button className='button-add-participants'>Añadir participantes</button>
          </div>
        </div>
       <div className='meeting-line'></div> 
        <div className='color-meeting-principal-container'>
          <div className='color-meeting-container'>
           <input type="color" className='color-meeting' name="color"  />
            <span className='text-color'>Color predeterminado</span>
          </div>
        </div>
      </div>
      <div className='button-container'>
        <button className='button-cancel'>Cancelar</button>
        <button className='button-save'>Guardar</button>
      </div>
      <div className='principal-div-request'></div>
      <div className='footer-div'><Footer /></div>
    </div>
  )
}

export default Meeting