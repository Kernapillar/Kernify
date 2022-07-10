import { RECEIVE_CURRENT_USER } from "../actions/session_actions"; 

const usersReducer = (state={}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            console.log("User handler")

            return Object.assign({}, state, {[action.currentUser.id]: action.currentUser})
            
    
        default:
            console.log("users reducer default")

            return state;
    }

}

export default usersReducer;