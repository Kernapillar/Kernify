import { connect } from "react-redux";
import PlaylistShow from "./playlist_show"
import { fetchPlaylist } from "../../../actions/playlist_actions";
import { fetchAllPlaylists, updatePlaylist, deletePlaylist } from "../../../actions/playlist_actions";

const mSTP = (state, ownProps) => {
    // console.log("state = ",state)
    return ({
        currentUser: state.session.id,
        tracks: Object.values(state.entities.tracks), 
        playlist: state.entities.playlists[ownProps.match.params.playlistId],
        playlists: Object.values(state.entities.playlists),
    })
}

const mDTP = (dispatch) => {
    return ({
        fetchPlaylist: playlistId => dispatch(fetchPlaylist(playlistId)),
        fetchAllPlaylists: () => dispatch(fetchAllPlaylists()), 
        updatePlaylist: (playlist) => dispatch(updatePlaylist(playlist)),
        deletePlaylist: (playlistId) => dispatch(deletePlaylist(playlistId))
    })
}

export default connect(mSTP, mDTP)(PlaylistShow);