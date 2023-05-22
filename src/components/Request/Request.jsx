import React, { useEffect, useState } from 'react';
import './Request.scss';
import { DownOutlined, ClockCircleFilled } from '@ant-design/icons'
import axios from 'axios';
import rachel from "../../assets/icons/rachel.png"
import Footer from "../Footer/Footer"

const userPhoto = rachel;
const eventName = 'Sesión fotográfica paramoda y editorial';
const formattedDate = '01/01/2022';
const eventPhase = 'Phase 1';
const chatButton = 'Chat';

const Request = () => {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const [requests, setRequests] = useState(() => {
        const localData = localStorage.getItem('requests');
        return localData ? JSON.parse(localData) : [];
    });

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const saveLocalRequests = (requests) => {
        localStorage.setItem('requests', JSON.stringify(requests));
    };

    const getRequests = async () => {
        try {
            const req = await axios.get("la ruta GET de las peticiones con los matches en un concreto evento ")
            // console.log(req)
            setRequests(req.data.results) //Request con req.data.ect hasta llegar a la informacion de las peticiones
            saveLocalRequests(req.data.results);//Guardando el estado de request en el localstorege
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getRequests()
    }, [])

    return (
        <>
        <div>
            <div className="principal-container">
          <div className='principal-div-request'></div>
                <div className="secundary-container">
                    <div className="text-container">
                        <h1 className="request-text">Peticiones</h1>
                    </div>
                    <div className="request-line"></div>
                </div>
                <div className={"principal-dropdown-container " + (isDropdownOpen ? "open" : "")} onClick={toggleDropdown}>
                    <div className="dropdown-container">
                        <div className="clock-container">
                            <div className="clock"><ClockCircleFilled className="gris" /></div>
                        </div>
                        <div className="dropdown-text">
                            <div className="day-date">Martes , 12 Mayo</div>{/* un map. para sacar la info de los dias */}
                            {isDropdownOpen && (
                                <div className="dropdown-content">
                                    <div className="user-container"> {/* un map. para sacar la informacion de la peticion "match" recibido */}
                                        <img className="avatar" src={userPhoto} alt="User" />
                                        <div className="info-request"> {/* //=text */}
                                            <p className="titel-request">{eventName}</p>
                                            <p className="description-request">{eventPhase} | {formattedDate}</p>
                                        </div>
                                        {chatButton && <button className='button-chat'>{chatButton}</button>}
                                        {/*       {requests.map(request => {
                                    return (
                                        <div key={request.id}>
                                            <img src={request.img} alt="User" />
                                            <h3>{request.name}</h3>
                                            <p>{request.eventPhase} | {request.formattedDate}</p>
                                            {chatButton && <button>{chatButton}</button>}
                                        </div>
                                    )
                                })} */}
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="drop-arrow"><DownOutlined className="gris" /></div>
                    </div>

                </div>
                <div className='footer-div'><Footer /></div>
            </div>
            </div>
        </>
    );
};

export default Request;