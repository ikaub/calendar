import {DISPLAY_DAY_DATA, NEXT_MONTH, PREVIOUS_MONTH, SHOW_POPUP} from "../actions/actions";

const INITIAL_STATE = {
    currentDate: new Date(),
    showPopup: false,
    dayInfo: {}
}

const dateReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case NEXT_MONTH:
            return {
                ...state,
                currentDate: new Date(state.currentDate.getFullYear(), state.currentDate.getMonth() + 1)
            };
        case PREVIOUS_MONTH:
            return {
                ...state,
                currentDate: new Date(state.currentDate.getFullYear(), state.currentDate.getMonth() - 1)
            };
        case SHOW_POPUP:
            return {
                ...state,
                showPopup: !state.showPopup
            };
        case DISPLAY_DAY_DATA:
            return {
                ...state,
                dayInfo: action.payload
            }
        default:
            return state;
    }
}

export default dateReducer;