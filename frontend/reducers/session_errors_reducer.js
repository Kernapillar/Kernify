import {RECEIVE_ERRORS, RECEIVE_CURRENT_USER} from '../actions/session_actions';


const sessionErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ERRORS:
            console.log("session error handler")
            return action.errors
        case RECEIVE_CURRENT_USER:
            return []

        default:
            console.log("session errors reducer default")

            return state;
    }
}

export default sessionErrorsReducer;