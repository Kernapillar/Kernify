import { receivePlaylistItemResponse, clearPlaylistItemResponse } from "../../../actions/playlist_actions";
import { connect } from "react-redux";
import Popup from "./popup";


const mSTP = (state) => {
    return ({
        response: state.entities.response
    })

}

const mDTP = (dispatch) => {
    return ({
        receiveResponse: () => dispatch(receivePlaylistItemResponse()),
        clearResponse: () => dispatch(clearPlaylistItemResponse())
    })
}

export default(connect(mSTP, mDTP))(Popup);
