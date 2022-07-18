import { connect } from "react-redux";
import ArtistIndex from "./artist_index";
import { fetchAllArtists } from "../../../actions/music_actions"

const mSTP = (state) => {
    return ({
        artists: Object.values(state.entities.artists) 

    })
}
const mDTP = (dispatch) => {
    return ({
        fetchAllArtists: () => dispatch(fetchAllArtists())
    })
}


export default connect(mSTP, mDTP)(ArtistIndex);