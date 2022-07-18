import React from "react";
import CardIndex from "../card_components/card_index";

class ArtistShow extends React.Component {

    componentDidMount(){
        this.props.fetchArtist()
    }

    

    render() {
        // console.log("props artist show page: ", this.props)

        if (!this.props.artist || !this.props.albums) {
            return null
        } else {
            // console.log("look at me!", this.props.artist)
            return <CardIndex mediaArr={this.props.albums} cardType={"album"} preview={false} 
            artist={this.props.artist[this.props.match.params.artistId]}/>  

        }
    }
}


export default ArtistShow;