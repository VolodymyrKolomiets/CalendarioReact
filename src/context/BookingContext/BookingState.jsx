import { createContext, useReducer } from "react";
import axios from "axios";
import BookingReducer from "./BookingReducer";

const initialState = {
    bookings: [],
    booking: {},

};

const API_URL = "http://localhost:8080";

export const BookingContext = createContext(initialState);

export const BookingProvider = ({ children }) => {
    const [state, dispatch] = useReducer(BookingReducer, initialState);

    const addBooking = async (booking) => {
        const token = JSON.parse(localStorage.getItem('token'));
        try {
            const res = await axios.post(API_URL + 'bookings/create', booking, {
                headers: {
                    authorization: token,
                },
            });
            dispatch({
                type: 'ADD_BOOKING',
                payload: res.data.booking,
            });
        } catch (error) {
            console.error(error);
        }
    };

    // const updateBookingId = async (id, booking) => {
    //     const token = JSON.parse(localStorage.getItem('token'));
    //     try {
    //         await axios.put(API_URL + 'bookings/updateBookingById/' + id, booking, {
    //             headers: {
    //                 authorization: token,
    //             },
    //         });
    //     } catch (error) {
    //         console.error(error);
    //     }
    // };

    // const getAllBookings = async () => {
    //     try {
    //         const res = await axios.get(API_URL + 'bookings/getAllBookings');
    //         dispatch({
    //             type: 'GET_BOOKINGS',
    //             payload: res.data,
    //         });
    //     } catch (error) {
    //         console.error(error);
    //     }
    // };

    // const getBookingId = async (id) => {
    //     try {
    //         const res = await axios.get(API_URL + 'bookings/getById/' + id);
    //         dispatch({
    //             type: 'GET_BOOKING_ID',
    //             payload: res.data,
    //         });
    //     } catch (error) {
    //         console.error(error);
    //     }
    // };

    const deleteBooking = async (id) => {
        const token = JSON.parse(localStorage.getItem('token'));
        try {
            await axios.delete(API_URL + 'bookings/deleteById/' + id, {
                headers: {
                    authorization: token,
                },
            });
            dispatch({
                type: 'DELETE_BOOKING',
                payload: id,
            });
        } catch (error) {
            console.error(error);
        }
    };




    return (
        <BookingContext.Provider
            value={{
                bookings: state.bookings,
                booking: state.booking,
                addBooking,
                // updateBookingId,
                // getAllBookings,
                // getBookingId,
                deleteBooking

            }}
        >
            {children}
        </BookingContext.Provider>
    );
};