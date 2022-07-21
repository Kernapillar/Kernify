import React from 'react';
import {connect} from 'react-redux';
import { createPlaylist } from '../../../actions/playlist_actions';
import PlaylistForm from "./playlist_form"



const mSTP = (state) => {
    return ({
        playlist: {name: "", 
        description: "", 
        user_id: state.session.id}, 
        formType: "Create Playlist"
    })
}

const mDTP = (dispatch) => {
    return ({
        processForm: playlist => dispatch(createPlaylist(playlist))
    })
}

export default connect(mSTP, mDTP)(PlaylistForm)