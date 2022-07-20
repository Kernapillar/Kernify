import { connect } from "react-redux";
import PlaylistShow from "./playlist_show"
import { fetchPlaylist } from "../../../actions/playlist_actions";
import { fetchAllPlaylists } from "../../../actions/playlist_actions";

const mSTP = (state, ownProps) => {
    // console.log("state = ",state)
    return ({
        tracks: Object.values(state.entities.tracks), 
        playlist: state.entities.playlists[ownProps.match.params.playlistId],
        playlists: Object.values(state.entities.playlists),
    })
}

const mDTP = (dispatch) => {
    return ({
        fetchPlaylist: playlistId => dispatch(fetchPlaylist(playlistId)),
        fetchAllPlaylists: () => dispatch(fetchAllPlaylists())
    })
}

export default connect(mSTP, mDTP)(PlaylistShow);