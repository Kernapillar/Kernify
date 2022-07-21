import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import artistsReducer from "./artists_reducer";
import albumsReducer from "./albums_reducer";
import tracksReducer from "./tracks_reducer";
import playlistReducer from "./playlists_reducer";
import playerReducer from "./player_reducer"

const entitiesReducer = combineReducers({
    users: usersReducer,
    artists: artistsReducer,
    albums: albumsReducer,
    tracks: tracksReducer, 
    playlists: playlistReducer,
    player: playerReducer
})


export default entitiesReducer;