import React from "react";
import { Link } from "react-router-dom";
import CardIndex from "../card_components/card_index";


class AlbumIndex extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount() {
        window.scrollTo(0, 0)
        this.props.fetchAllAlbums();
        }

    render() {
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