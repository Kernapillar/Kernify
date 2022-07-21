import {
    RECEIVE_ALL_TRACKS,
    RECEIVE_ALBUM,
    RECEIVE_ARTIST, 
    RECEIVE_HOME_PAGE
} from '../actions/music_actions'
import { RECEIVE_PLAYLIST, DELETE_PLAYLIST_ITEM, RECEIVE_NEW_PLAYLIST } from '../actions/playlist_actions';


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
        case RECEIVE_NEW_PLAYLIST:
            return {}
        case DELETE_PLAYLIST_ITEM:
            return action.tracks || {}
        case RECEIVE_PLAYLIST:
            if (action.tracks){
                return action.tracks
            }
            return state
        default:
            return state;
    }
}

export  default tracksReducer;