import { connect } from "react-redux";
import Search from "./search";
import { fetchHome, fetchAllTracks } from "../../../actions/music_actions"

const mSTP = (state) => {
    return ({
        albums: Object.values(state.entities.albums), 
        artists: Object.values(state.entities.artists), 
        playlists: Object.values(state.entities.playlists),
        tracks: Object.values(state.entities.tracks),

    })
}
const mDTP = (dispatch) => {
    return ({
        fetchHome: () => dispatch(fetchHome()), 
        fetchAllTracks: () => dispatch(fetchAllTracks())
    })
}


export default connect(mSTP, mDTP)(Search);