import { connect } from "react-redux";
import { deletePlaylist } from "../../actions/playlist_actions";
import { withRouter } from "react-router-dom";
import PlaylistShowOptionsDropdown from "./playlist_show_options_dropdown";

const mSTP = (state, ownProps) => {
    return({
        currentUser: state.session.id,
        playlistId: ownProps.match.params.playlistId,
        playlistUser: state.entities.playlists[ownProps.match.params.playlistId].user_id
    })
}

const mDTP = (dispatch) => {
    return ({
        deletePlaylist: (playlistId) => dispatch(deletePlaylist(playlistId))
    })
}


export default withRouter(connect(mSTP, mDTP)(PlaylistShowOptionsDropdown));


