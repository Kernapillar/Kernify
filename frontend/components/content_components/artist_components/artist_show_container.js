import { connect } from "react-redux";
import ArtistShow from "./artist_show";
import { fetchArtist } from "../../../actions/music_actions"
import { fetchAllPlaylists } from "../../../actions/playlist_actions";
import { fetchQueue, playTrack } from "../../../actions/player_actions";


const mSTP = (state, ownProps) => {
    return ({
        albums: Object.values(state.entities.albums),
        artist: state.entities.artists[ownProps.match.params.artistId], 
        tracks: Object.values(state.entities.tracks),
        tracksObject: state.entities.tracks

    })
}

const mDTP = (dispatch, ownProps) => {
    return ({
        fetchArtist: () => dispatch(fetchArtist(ownProps.match.params.artistId)), 
        fetchAllPlaylists: () => dispatch(fetchAllPlaylists()), 
        fetchQueue: (tracks) => dispatch(fetchQueue(tracks)),
        playTrack: (trackId) => dispatch(playTrack(trackId))
    })
};

export default connect(mSTP, mDTP)(ArtistShow);