import React from "react";
import CardIndex from "../card_components/card_index";

class ArtistShow extends React.Component {

    componentDidMount(){
        this.props.fetchArtist()
    }

    

    render() {
        if (!this.props.artist || !this.props.albums) {
            return null
        } else {
            // console.log("artist show props", this.props.artist[this.props.match.params.artistId].name)
            return (
                <>
                    <h1>{this.props.artist.name}</h1>
                    <CardIndex mediaArr={this.props.albums} cardType={"album"} preview={false} 
                    artist={this.props.artist[this.props.match.params.artistId]}/>  
                </>

            )

        }
    }
}


export default ArtistShow;