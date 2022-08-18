import React from "react";
import CardIndex from "../card_components/card_index";
import TrackIndex from "../track_components/track_index";

class ArtistShow extends React.Component {

    componentDidMount(){
        window.scrollTo(0, 0)
        this.props.fetchArtist();
        this.props.fetchAllPlaylists();
    }

    

    render() {
        if (!this.props.artist || !this.props.albums) {
            return null
        } else {
            // console.log("artist show props", this.props)
            return (
                <>
                    <h1>{this.props.artist.name}</h1>
                    <br />
                    <h3>Popular</h3>
                    <TrackIndex tracks={this.props.tracks} playTrack={this.props.playTrack} fetchQueue={this.props.fetchQueue} tracksObject={this.props.tracksObject} trackType="artist" artist={this.props.artist} />
                    <br />
                    <h3>Albums</h3>
                    <br />
                    <CardIndex mediaArr={this.props.albums} cardType={"album"} preview={false} 
                    artist={this.props.artist[this.props.match.params.artistId]}/>  
                    <br />
                    <h3>Bio</h3>
                    <p>
                        {this.props.artist.bio}
                    </p>
                </>

            )

        }
    }
}


export default ArtistShow;