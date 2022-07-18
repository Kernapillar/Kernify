import { connect } from "react-redux";
import ArtistShow from "./artist_show";
import { fetchArtist } from "../../../actions/music_actions"

const mSTP = (state) => {
    return ({
        albums: Object.values(state.entities.albums),
        artist: state.entities.artists, 
    })
}

const mDTP = (dispatch, ownProps) => {
    return ({
        fetchArtist: () => dispatch(fetchArtist(ownProps.match.params.artistId))
    })
};

export default connect(mSTP, mDTP)(ArtistShow);