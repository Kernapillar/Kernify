import { connect } from "react-redux";
import PlaylistShow from "./playlist_show"
import { fetchPlaylist } from "../../actions/playlist_actions";

const mSTP = (state) => {
    return ({
        tracks: Object.values(state.entities.tracks)
    })
}

const mDTP = (dispatch) => {
    return ({
        fetchPlaylist: playlistId => dispatch(fetchPlaylist(playlistId))
    })
}

export default connect(mSTP, mDTP)(PlaylistShow);