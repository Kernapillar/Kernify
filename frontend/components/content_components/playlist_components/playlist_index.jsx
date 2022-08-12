import React from "react";
import { Link } from "react-router-dom";
import CardIndex from "../card_components/card_index";


class PlaylistIndex extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount() {
        window.scrollTo(0, 0)
        this.props.fetchAllPlaylists();
        }

    render() {
        if (!this.props.playlists[0]) {
            return null
        } else {
            return <>
                <CardIndex mediaArr={this.props.playlists} cardType={"playlist"} preview={false} />
            </>
        }
    }
}

export default PlaylistIndex;