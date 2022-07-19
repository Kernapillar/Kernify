import { connect } from "react-redux";
import TrackDropdown from "./track_options_dropdown";
import { fetchAllPlaylists, 
    createPlaylistItem, 
    deletePlaylistItem 
} from "../../actions/playlist_actions";


const mDTP = (dispatch) => {
    return ({
        fetchAllPlaylists: () => dispatch(fetchAllPlaylists()),
        createPlaylistItem: playlistItem => dispatch(createPlaylistItem(playlistItem)),
        deletePlaylistItem: playlistItemId => dispatch(deletePlaylistItem(playlistItemId))
    })
}


export default connect(null, mDTP)(TrackDropdown);


