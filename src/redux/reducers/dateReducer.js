import {NEXT_MONTH, PREVIOUS_MONTH} from "../actions/actions";

const INITIAL_STATE = {
    currentDate: new Date()
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
        default:
            return state;
    }
}

export default dateReducer;