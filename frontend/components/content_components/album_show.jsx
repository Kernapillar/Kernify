import React from "react";
import TrackIndex from "./track_index";

class AlbumShow extends React.Component {

    componentDidMount(){
        console.log("props: ", this.props)
        this.props.fetchAlbum(this.props.match.params.albumId)
    }

    render() {
        return <TrackIndex tracks={this.props.tracks} artist={this.props.artist} album={this.props.album}/>
    }
}


export default AlbumShow;