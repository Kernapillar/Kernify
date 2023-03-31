import { RECEIVE_QUEUE, SET_CURRENT_TRACK } from "../actions/player_actions";



const playerReducer = (state = [], action) => {
    Object.freeze(state);
    const nextState = [...state]
    switch (action.type) {
        case RECEIVE_QUEUE:
            return Object.values(action.tracks)
        default:
            return state;
    }
}

export  default playerReducer;