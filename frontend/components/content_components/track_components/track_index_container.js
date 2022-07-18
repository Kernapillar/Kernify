import { connect } from "react-redux";
import trackIndex from "./track_index";
import { fetchAllTracks, fetchAlbum } from "../../../actions/music_actions"

const mSTP = (state) => {
    return ({
        tracks: Object.values(state.entities.tracks),
        artist: state.entities.artists
    })
}
const mDTP = (dispatch) => {
    return ({
        fetchAllTracks: () => dispatch(fetchAllTracks()),
        fetchAlbum: (albumId) => dispatch(fetchAlbum(albumId)) 
        // ^ is this necessary here? what methods will tracks need
        // play, like, add to playlist? etc
    })
}


export default connect(mSTP, mDTP)(trackIndex);


// obsolete?