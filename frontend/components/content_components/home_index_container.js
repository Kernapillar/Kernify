import { connect } from "react-redux";
import HomeIndex from "./home_index";
import { fetchHome } from "../../actions/music_actions"

const mSTP = (state) => {
    return ({
        albums: Object.values(state.entities.albums), 
        artists: Object.values(state.entities.artists), 
        playlists: Object.values(state.entities.playlists)

    })
}
const mDTP = (dispatch) => {
    return ({
        fetchHome: () => dispatch(fetchHome())
    })
}


export default connect(mSTP, mDTP)(HomeIndex);