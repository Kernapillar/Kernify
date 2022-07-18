import React from "react";
import TrackIndex from "../track_components/track_index";

class AlbumShow extends React.Component {

    componentDidMount(){
        this.props.fetchAlbum(this.props.match.params.albumId).then(

            console.log("props: ", this.props)
        )
    }

    render() {
        if (!this.props.tracks || !this.props.album) {
            return null
        } else {
            console.log("albumnamehere = ", this.props)
            return (
                <>
                    <h1>{this.props.album.name}</h1>  
                    <TrackIndex tracks={this.props.tracks} artist={this.props.tracks.artist} album={this.props.album}/>
                </>
            )
        }
    }
}


export default AlbumShow;