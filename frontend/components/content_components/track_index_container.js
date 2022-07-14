import { connect } from "react-redux";
import trackIndex from "./track_index";
import { fetchAllTracks } from "../../actions/music_actions"

const mSTP = (state) => {
    return ({
        tracks: Object.values(state.entities.tracks) 

    })
}
const mDTP = (dispatch) => {
    return ({
        fetchAllTracks: () => dispatch(fetchAllTracks())
    })
}


export default connect(mSTP, mDTP)(trackIndex);