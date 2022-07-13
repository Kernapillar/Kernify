import {
    RECEIVE_ALL_ALBUMS,
    RECEIVE_ALBUM, 
    RECEIVE_ARTIST
} from '../actions/music_actions'


const albumsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ALL_ALBUMS:
            return action.albums;
        case RECEIVE_ARTIST:
            return action.albums
        case RECEIVE_ALBUM:
            return action.album;
        default:
            return state;
    }
}

export  default albumsReducer;