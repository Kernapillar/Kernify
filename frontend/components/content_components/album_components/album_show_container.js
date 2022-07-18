import { connect } from "react-redux";
import AlbumShow from "./album_show";
import { fetchAlbum } from "../../../actions/music_actions"

const mSTP = (state) => {
    return ({
        tracks: Object.values(state.entities.tracks),
        artist: state.entities.artists,
        album: state.entities.album
    })
}

const mDTP = (dispatch) => {
    return ({
        fetchAlbum: albumId => dispatch(fetchAlbum(albumId))
    })
};

export default connect(mSTP, mDTP)(AlbumShow);