import { connect } from "react-redux";
import PlaylistIndex from "./playlist_index";
import { fetchAllPlaylists } from "../../../actions/playlist_actions"

const mSTP = (state) => {
    return ({
        playlists: Object.values(state.entities.playlists) 

    })
}
const mDTP = (dispatch) => {
    return ({
        fetchAllPlaylists: () => dispatch(fetchAllPlaylists())
    })
}


export default connect(mSTP, mDTP)(PlaylistIndex);