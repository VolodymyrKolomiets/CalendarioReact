const bookings = (state, action) => {
    switch (action.type) {
        case "ADD_BOOKING":
            return {
                ...state,
                bookings: [action.payload, ...state.bookings],
            };

        case "GET_BOOKINGS":
            return {
                ...state,
                bookings: action.payload,
            };

        case "GET_BOOKING_ID":
            return {
                ...state,
                booking: action.payload,
            };

        case "DELETE_BOOKING":
            return {
                ...state,
                bookings: state.bookings.filter(
                    (booking) => booking.id !== action.payload),
            };






        default:
            return state;
    }
};
export default bookings;