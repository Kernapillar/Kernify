import { connect } from "react-redux";
import ArtistShow from "./artist_show";
import { fetchArtist } from "../../../actions/music_actions"
import { fetchAllPlaylists } from "../../../actions/playlist_actions";

const mSTP = (state, ownProps) => {
    return ({
        albums: Object.values(state.entities.albums),
        artist: state.entities.artists[ownProps.match.params.artistId], 
        tracks: Object.values(state.entities.tracks)
    })
}

const mDTP = (dispatch, ownProps) => {
    return ({
        fetchArtist: () => dispatch(fetchArtist(ownProps.match.params.artistId)), 
        fetchAllPlaylists: () => dispatch(fetchAllPlaylists())
    })
};

export default connect(mSTP, mDTP)(ArtistShow);