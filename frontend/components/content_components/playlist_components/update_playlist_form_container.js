import React from 'react';
import {connect} from 'react-redux';
import { fetchAllPlaylists, updatePlaylist } from '../../../actions/playlist_actions';
import PlaylistForm from "./playlist_form"

class EditPlaylistForm extends React.Component {
    componentDidMount() {
        this.props.fetchAllPlaylists();
    }

    render() {
        const { processForm, formType, playlist } = this.props;
        if (!playlist) {
            return null;
        } else {
            return(
                <PlaylistForm processForm={processForm}
                formType={formType} playlist={playlist} 
                history={this.props.history}/>
            )
        }
    }
}

const mSTP = (state, ownProps) => {
    // console.log(state, ownProps)
    return ({
        playlist: state.entities.playlists[ownProps.match.params.playlistId], 
        formType: "Update Playlist",
        history: ownProps.history
    })
}

const mDTP = (dispatch) => {
    return ({
        processForm: playlist => dispatch(updatePlaylist(playlist)),
        fetchAllPlaylists: () => dispatch(fetchAllPlaylists())
    })
}

export default connect(mSTP, mDTP)(EditPlaylistForm);