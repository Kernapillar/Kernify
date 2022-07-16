import {
    RECEIVE_ALL_TRACKS,
    RECEIVE_ALBUM,
    RECEIVE_ARTIST, 
    RECEIVE_HOME_PAGE
} from '../actions/music_actions'


const tracksReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ALL_TRACKS:
            return action.tracks;
        case RECEIVE_ARTIST:
            return action.tracks;
        case RECEIVE_ALBUM:
            return action.tracks;
        case RECEIVE_HOME_PAGE:
            return {}
        default:
            return state;
    }
}

export  default tracksReducer;