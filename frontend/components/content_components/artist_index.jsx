import React from "react";
import { Link } from "react-router-dom";
import CardIndexItem from "./card_index_item";
import CardIndex from "./card_index";


class ArtistIndex extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount() {
        this.props.fetchAllArtists();
    }

    render() {
        if (!this.props.artists) {
            return null
        } else {
            return (CardIndex(this.props.artists, "artist", true))
        }
    }
}

export default ArtistIndex;