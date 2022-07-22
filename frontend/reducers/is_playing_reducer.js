import { IS_PLAYING, START_PLAYING, STOP_PLAYING } from "../actions/player_actions";



const isPlayingReducer = (state = false, action) => {
    Object.freeze(state);
    switch (action.type) {
        case IS_PLAYING:
            return state
        case START_PLAYING:
            return true
        case STOP_PLAYING:
                return false
        default:
            return state;
    }
}

export  default isPlayingReducer;