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
        // console.log("playlistShowprops", this.props) 
        if (!this.props.playlist) {
            return null
        } else {
            return (
                <>
                    <h1>{this.props.playlist.name}</h1>
                    <img className="card-picture show-picture" src={ this.props.playlist.pictureUrl ? this.props.playlist.pictureUrl : dark_side} alt="card picure" />
                    <div><p>{this.props.playlist.description}</p></div>
                    <div className='playlist-options' >
                       {this.ownPlaylist()}
                    </div>
                    <TrackIndex tracks={this.props.tracks} tracksObject={this.props.tracksObject} fetchQueue={this.props.fetchQueue}
                    trackType="playlist"/>
                </>
            )
        }
    }
}


export default PlaylistShow;


