import React from "react";
import TrackIndex from "../track_components/track_index";

class AlbumShow extends React.Component {

    componentDidMount(){
        window.scrollTo(0, 0)
        this.props.fetchAlbum(this.props.match.params.albumId)
        this.props.fetchAllPlaylists();
    }

    render() {
        if (!this.props.tracks || !this.props.album) {
            return null
        } else {
            console.log(this.props)
            return (
                <>
                    <h1>{this.props.album.name}</h1>  
                    <img className="card-picture show-picture" src={ this.props.album.pictureUrl ? this.props.album.pictureUrl : dark_side} alt="card picure" />

                    <TrackIndex tracks={this.props.tracks} playTrack={this.props.playTrack} tracksObject={this.props.tracksObject} fetchQueue={this.props.fetchQueue} artist={this.props.tracks.artist} album={this.props.album}/>
                </>
            )
        }
    }
}


export default AlbumShow;