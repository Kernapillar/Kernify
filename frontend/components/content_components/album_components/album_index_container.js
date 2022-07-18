import { connect } from "react-redux";
import AlbumIndex from "./album_index";
import { fetchAllAlbums } from "../../../actions/music_actions"

const mSTP = (state) => {
    return ({
        albums: Object.values(state.entities.albums) 

    })
}
const mDTP = (dispatch) => {
    return ({
        fetchAllAlbums: () => dispatch(fetchAllAlbums())
    })
}


export default connect(mSTP, mDTP)(AlbumIndex);