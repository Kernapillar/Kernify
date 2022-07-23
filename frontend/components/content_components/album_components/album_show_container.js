import { connect } from "react-redux";
import AlbumShow from "./album_show";
import { fetchAlbum } from "../../../actions/music_actions"
import { fetchAllPlaylists } from "../../../actions/playlist_actions";
import { fetchQueue, playTrack } from "../../../actions/player_actions";


const mSTP = (state, ownProps) => {
    return ({
        tracks: Object.values(state.entities.tracks),
        artist: state.entities.artists,
        album: state.entities.albums[ownProps.match.params.albumId],
        tracksObject: state.entities.tracks
    })
}

const mDTP = (dispatch) => {
    return ({
        fetchAlbum: albumId => dispatch(fetchAlbum(albumId)),
        fetchAllPlaylists: () => dispatch(fetchAllPlaylists()), 
        fetchQueue: (tracks) => dispatch(fetchQueue(tracks)), 
        playTrack: (trackId) => dispatch(playTrack(trackId))

    })
};

export default connect(mSTP, mDTP)(AlbumShow);