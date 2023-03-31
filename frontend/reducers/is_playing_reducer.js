import { SET_CURRENT_TRACK } from "../actions/player_actions";



const isPlayingReducer = (state = null, action) => {
    Object.freeze(state);
    switch (action.type) {
        case SET_CURRENT_TRACK:
           return action.trackId
        default:
            return state;
    }
}

export  default isPlayingReducer;