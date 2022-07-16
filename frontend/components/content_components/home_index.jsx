import React from "react";
import { Link } from "react-router-dom";
import CardIndex from "./card_index";


class HomeIndex extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount() {
        this.props.fetchHome();
        }

    render() {
        console.log(" home index props sending to cardindex",this.props)
        if (!this.props.albums[0] || !this.props.artists[0]) {
            return null
        } else {
            return <>
                <h1 className="home-welcome">Welcome to Kernify! </h1>
                <br />
                <span className="home-preview-header">
                    <h3>Artists</h3> <Link to="/artists"><p className="see-all">SEE ALL</p></Link> 
                </span>
                <br />
                <CardIndex mediaArr={this.props.artists} cardType={"artist"} preview={true} />
                <br />
                <span className="home-preview-header">
                    <h3>Albums</h3> <Link to="/albums"><p className="see-all">SEE ALL</p></Link> 
                </span>
                <br />
                <CardIndex mediaArr={this.props.albums} cardType={"album"} preview={true} />

            </> 
        }
    }
}

export default HomeIndex;