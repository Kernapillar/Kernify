import React from "react";
import { Link } from "react-router-dom";


class ArtistIndex extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount() {
        this.props.fetchAllArtists();
        console.log("after mounting: ",this.props)
    }

    render() {
        return (
        
            <ul>
                {this.props.artists.map(artist => <li> {artist.name}</li>)}

            </ul>
        )
    }
}

export default ArtistIndex;