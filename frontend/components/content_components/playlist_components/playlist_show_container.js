import { connect } from "react-redux";
import PlaylistShow from "./playlist_show"
import { fetchPlaylist } from "../../../actions/playlist_actions";
import { fetchAllPlaylists, updatePlaylist, deletePlaylist } from "../../../actions/playlist_actions";
import { fetchQueue, playTrack } from "../../../actions/player_actions";


const mSTP = (state, ownProps) => {
    // console.log("state = ",state)
    return ({
        currentUser: state.session.id,
        tracks: Object.values(state.entities.tracks), 
        playlist: state.entities.playlists[ownProps.match.params.playlistId],
        playlists: Object.values(state.entities.playlists),
        tracksObject: state.entities.tracks

    })
}

const mDTP = (dispatch) => {
    return ({
        fetchPlaylist: playlistId => dispatch(fetchPlaylist(playlistId)),
        fetchAllPlaylists: () => dispatch(fetchAllPlaylists()), 
        updatePlaylist: (playlist) => dispatch(updatePlaylist(playlist)),
        deletePlaylist: (playlistId) => dispatch(deletePlaylist(playlistId)), 
        fetchQueue: (tracks) => dispatch(fetchQueue(tracks)), 
        playTrack: (trackId) => dispatch(playTrack(trackId))
    })
}

export default connect(mSTP, mDTP)(PlaylistShow);