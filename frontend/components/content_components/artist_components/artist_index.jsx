import React from "react";
import { Link } from "react-router-dom";
import CardIndex from "../card_components/card_index";


class ArtistIndex extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount() {
        window.scrollTo(0, 0)
        this.props.fetchAllArtists();
        }

    render() {
        // console.log("artist index props sending to cardindex",this.props)
        if (!this.props.artists[0]) {
            return null
        } else {
            return <>
            
            <CardIndex mediaArr={this.props.artists} cardType={"artist"} preview={false} />
            
            </>
        }
    }
}

export default ArtistIndex;