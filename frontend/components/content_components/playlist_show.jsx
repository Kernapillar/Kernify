import React from "react";
import TrackIndex from "./track_index";

class PlaylistShow extends React.Component {

    componentDidMount(){
        console.log("props: ", this.props)
        this.props.fetchPlaylist(this.props.match.params.playlistId)
    }

    render() {
        return <TrackIndex tracks={this.props.tracks} trackType="playlist"/>
    }
}


export default PlaylistShow;


// toDO!
// finish up playlist show/index, adjust the track items to show album/artist for each playlist item. 
    // the way album show and playlist show are rendering the track index/track index items are different, maybe consolidate that. specifically the artist/album info
// make dropdown and playlist create form for playlist name and items. maybe make a fake picture generator? 
// start on music/styling sidebar, AWS?
// almost there! 
