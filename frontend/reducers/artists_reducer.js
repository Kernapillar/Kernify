import {
    RECEIVE_ALL_ARTISTS,
    RECEIVE_ARTIST, 
    RECEIVE_ALBUM
} from '../actions/music_actions'


const artistsReducer = (state = {}, action) => {
    Object.freeze(state);
    // const nextState = Object.assign({}, state)
    console.log(action)
    const nextState = {};
    switch (action.type) {
        case RECEIVE_ALL_ARTISTS:
            return action.artists;
        case RECEIVE_ARTIST:
            return action.artist
        case RECEIVE_ALBUM:
            return action.artist
        default:
            return state;
    }
}

export  default artistsReducer;