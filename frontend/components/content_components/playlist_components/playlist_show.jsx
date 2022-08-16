import React from "react";
import TrackIndex from "../track_components/track_index";
import PlaylistShowOptionsDropdownContainer from "../../dropdown_components/playlist_show_options_dropdown_container";
import dark_side from "../../../../app/assets/images/dark_side.jpeg"

class PlaylistShow extends React.Component {

    componentDidMount(){
        window.scrollTo(0, 0)
        this.props.fetchPlaylist(this.props.match.params.playlistId);
        this.props.fetchAllPlaylists();

    }

    ownPlaylist() {
        if (this.props.currentUser === this.props.playlist.user_id) {
            return  <PlaylistShowOptionsDropdownContainer />
        }
    }





    render() {
        if (!this.props.playlist) {
            return null
        } else {
            let cardStyle = {
                '--color-1': `${this.props.playlist.color_1}`, 
                '--color-2': `${this.props.playlist.color_2}`
                }
            return (
                <>
                    <h1>{this.props.playlist.name}</h1>
                    <div className="card-picture playlist-card" style={cardStyle}>
                        <span className="material-symbols-outlined">queue_music</span>
                    </div>
                    <div><p>{this.props.playlist.description}</p></div>
                    <div className='playlist-options' >
                       {this.ownPlaylist()}
                    </div>
                    <TrackIndex tracks={this.props.tracks} playTrack={this.props.playTrack} tracksObject={this.props.tracksObject} fetchQueue={this.props.fetchQueue}
                    trackType="playlist"/>
                </>
            )
        }
    }
}


export default PlaylistShow;


