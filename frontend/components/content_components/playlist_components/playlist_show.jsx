import React from "react";
import TrackIndex from "../track_components/track_index";
import PlaylistShowOptionsDropdownContainer from "../../dropdown_components/playlist_show_options_dropdown_container";

class PlaylistShow extends React.Component {

    componentDidMount(){
        this.props.fetchPlaylist(this.props.match.params.playlistId);
        this.props.fetchAllPlaylists();

    }

    ownPlaylist() {
        if (this.props.currentUser === this.props.playlist.user_id) {
            return  <PlaylistShowOptionsDropdownContainer />
        }
    }

    render() {
        console.log("playlistShowprops", this.props) 
        if (!this.props.playlist) {
            return null
        } else {
            return (
                <>
                    <h1>{this.props.playlist.name}</h1>
                    <div className='playlist-options' >
                       {this.ownPlaylist()}
                    </div>
                    <TrackIndex tracks={this.props.tracks} trackType="playlist"/>
                </>
            )
        }
    }
}


export default PlaylistShow;


