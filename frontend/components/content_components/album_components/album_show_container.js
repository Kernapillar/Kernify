import { connect } from "react-redux";
import AlbumShow from "./album_show";
import { fetchAlbum } from "../../../actions/music_actions"
import { fetchAllPlaylists } from "../../../actions/playlist_actions";

const mSTP = (state, ownProps) => {
    return ({
        tracks: Object.values(state.entities.tracks),
        artist: state.entities.artists,
        album: state.entities.albums[ownProps.match.params.albumId]
    })
}

const mDTP = (dispatch) => {
    return ({
        fetchAlbum: albumId => dispatch(fetchAlbum(albumId)),
        fetchAllPlaylists: () => dispatch(fetchAllPlaylists())

    })
};

export default connect(mSTP, mDTP)(AlbumShow);