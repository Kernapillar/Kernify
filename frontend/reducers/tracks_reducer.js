import {
    RECEIVE_ALL_TRACKS,
    RECEIVE_ALBUM,
    RECEIVE_ARTIST
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
        default:
            return state;
    }
}

export  default tracksReducer;