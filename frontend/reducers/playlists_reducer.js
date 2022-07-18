import {
    RECEIVE_ALL_PLAYLISTS, 
    RECEIVE_PLAYLIST, 
    REMOVE_PLAYLIST
} from "../actions/playlist_actions";
import {RECEIVE_HOME_PAGE} from "../actions/music_actions"

const playlistReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ALL_PLAYLISTS:
            return action.playlists;   
        case RECEIVE_HOME_PAGE:
            return action.playlists
        case RECEIVE_PLAYLIST:
            return action.playlist; 
        case REMOVE_PLAYLIST:
            const nextState = Object.assign({}, state);
            delete nextState[action.eventId]
            return nextState
        default:
            return state
    }
}

export default playlistReducer