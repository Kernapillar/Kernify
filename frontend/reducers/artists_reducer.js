import {
    RECEIVE_ALL_ARTISTS,
    RECEIVE_ARTIST, 
    RECEIVE_ALBUM, 
    RECEIVE_HOME_PAGE
} from '../actions/music_actions'


const artistsReducer = (state = {}, action) => {
    Object.freeze(state);
    // const nextState = Object.assign({}, state)
    // console.log(action)
    const nextState = {};
    switch (action.type) {
        case RECEIVE_ALL_ARTISTS:
            return action.artists;
        case RECEIVE_ARTIST:
            return action.artist
        case RECEIVE_ALBUM:
            return state
        case RECEIVE_HOME_PAGE:
            return action.artists
        default:
            return state;
    }
}

export  default artistsReducer;