import React from "react";
import { Link } from "react-router-dom";
import CardIndexItem from "./card_index_item";
import cardIndex from "./card_index";


class ArtistIndex extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount() {
        this.props.fetchAllArtists();
    }

    render() {
        return (cardIndex(this.props.artists, "artist", true))
    }
}

export default ArtistIndex;