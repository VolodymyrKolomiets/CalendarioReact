const events = (state, action) => {
    switch (action.type) {
        case "ADD_EVENT":
            return {
                ...state,
                events: [action.payload, ...state.events],
            };

        case "GET_EVENT_ID":
            return {
                ...state,
                event: action.payload,
            };

        case "GET_EVENTS":
            return {
                ...state,
                events: action.payload,
            };

        case 'GET_PRODUCT_BY_NAME':
            return {
                ...state,
                events: action.payload,
            };
            
        case "DELETE_EVENT":
            return {
                ...state,
                events: state.events.filter(
                    (event) => event.id !== action.payload),
            };



        default:
            return state;
    }
};
export default events;