import React from "react";
import { Link } from "react-router-dom";
import CardIndex from "./card_index";


class AlbumIndex extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount() {
        this.props.fetchAllAlbums();
        }

    render() {
        console.log("album index props sending to cardindex",this.props)
        if (!this.props.albums[0]) {
            return null
        } else {
            return <>
            
            <CardIndex mediaArr={this.props.albums} cardType={"album"} preview={false} />
            
            </>
        }
    }
}

export default AlbumIndex;