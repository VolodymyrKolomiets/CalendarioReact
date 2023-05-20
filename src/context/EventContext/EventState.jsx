import { createContext, useReducer } from "react";
import axios from "axios";
import EventReducer from "./EventReducer";

const initialState = {
    events: [],
    event: {},

};

const API_URL = "http://localhost:8080";

export const EventContext = createContext(initialState);

export const EventProvider = ({ children }) => {
    const [state, dispatch] = useReducer(EventReducer, initialState);

    const addEvent = async (event) => {
        const token = JSON.parse(localStorage.getItem('token'));
        try {
            const res = await axios.post(API_URL + 'events/create', event, {
                headers: {
                    authorization: token,
                },
            });
            dispatch({
                type: 'ADD_EVENT',
                payload: res.data.event,
            });
        } catch (error) {
            console.error(error);
        }
    };

    const updateEventId = async (id, event) => {
        const token = JSON.parse(localStorage.getItem('token'));
        try {
            await axios.put(API_URL + 'events/updateEventById/' + id, event, {
                headers: {
                    authorization: token,
                },
            });
        } catch (error) {
            console.error(error);
        }
    };

    const getEventId = async (id) => {
        try {
            const res = await axios.get(API_URL + 'events/getById/' + id);
            dispatch({
                type: 'GET_EVENT_ID',
                payload: res.data,
            });
        } catch (error) {
            console.error(error);
        }
    };

    const getAllEvents = async () => {
        try {
            const res = await axios.get(API_URL + 'events/getAllEvents');
            dispatch({
                type: 'GET_EVENTS',
                payload: res.data,
            });
        } catch (error) {
            console.error(error);
        }
    };

    const deleteEvent = async (id) => {
        const token = JSON.parse(localStorage.getItem('token'));
        try {
            await axios.delete(API_URL + 'events/deleteById/' + id, {
                headers: {
                    authorization: token,
                },
            });
            dispatch({
                type: 'DELETE_EVENT',
                payload: id,
            });
        } catch (error) {
            console.error(error);
        }
    };

    // const getEventByName = async (input) => {
    //     try {
    //         const res = await axios.get(API_URL + 'events/getByName/' + input);
    //         dispatch({
    //             type: 'GET_EVENT_BY_NAME',
    //             payload: res.data,
    //         });
    //     } catch (error) {
    //         console.error(error);
    //     }
    // };




    return (
        <EventContext.Provider
            value={{
                events: state.events,
                event: state.event,
                addEvent,
                updateEventId,
                getEventId,
                getAllEvents,
                // getEventByName,
                deleteEvent

            }}
        >
            {children}
        </EventContext.Provider>
    );
};