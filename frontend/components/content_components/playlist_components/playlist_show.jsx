import React from "react";
import TrackIndex from "../track_components/track_index";

class PlaylistShow extends React.Component {

    componentDidMount(){
        this.props.fetchPlaylist(this.props.match.params.playlistId);
        this.props.fetchAllPlaylists();

    }

    render() {
        // console.log("PSKLDJFSLIDHJFSD", this.props) 
        if (!this.props.tracks[0]) {
            return null
        } else {
            return (
                <>
                    <h1>{this.props.playlist.name}</h1>
                    <TrackIndex tracks={this.props.tracks} trackType="playlist"/>
                </>
            )
        }
    }
}


export default PlaylistShow;


// toDO!
// make dropdown and playlist create form for playlist name and items. maybe make a fake picture generator? 
// start on music/styling sidebar, AWS?
// almost there! 
