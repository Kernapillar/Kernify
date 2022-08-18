import {
    RECEIVE_PLAYLIST_ITEM_RESPONSE, 
    CLEAR_PLAYLIST_ITEM_RESPONSE
} from "../actions/playlist_actions";

const responseReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_PLAYLIST_ITEM_RESPONSE:
            // console.log("ACTION", action)
            if (!action.response) return [];
            return action.response;   
        case CLEAR_PLAYLIST_ITEM_RESPONSE:
            return []
        default:
            return state
    }
}

export default responseReducer