import { connect } from "react-redux";
import PlaylistShow from "./playlist_show"
import { fetchPlaylist } from "../../../actions/playlist_actions";

const mSTP = (state, ownProps) => {
    console.log("state = ",state)
    return ({
        tracks: Object.values(state.entities.tracks), 
        playlist: state.entities.playlists[ownProps.match.params.playlistId]
    })
}

const mDTP = (dispatch) => {
    return ({
        fetchPlaylist: playlistId => dispatch(fetchPlaylist(playlistId))
    })
}

export default connect(mSTP, mDTP)(PlaylistShow);