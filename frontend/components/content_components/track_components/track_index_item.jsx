import React from "react";
import { Link } from "react-router-dom";
import TrackDropdownContainer from "../../dropdown_components/track_options_dropdown_container";

class TrackIndexItem extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            isHovering: false
        };
        this.onMouseEnterHandler = this.onMouseEnterHandler.bind(this);
        this.onMouseOffHandler = this.onMouseOffHandler.bind(this);
        this.pressPlay = this.pressPlay.bind(this)
    }

    albumLinkRender = () => {
        if (this.props.trackType === "playlist" ) {
            return <Link className="album-link-text" to={`/albums/${this.props.track.album_id}`}>
            {this.props.album}
            </Link>
        } else if (this.props.trackType === "search" ) {
                return this.props.album
        }
    }

    onMouseEnterHandler () {
        this.setState({
            isHovering: true
        })
    }
    onMouseOffHandler () {
        this.setState({
            isHovering: false
        })
    }

    pressPlay() {
        this.props.fetchQueue(this.props.tracksObject);
        this.props.playTrack(this.props.position);

    }

    
    render(){
        return (
            <li className="track-item" 
            onMouseOver={this.onMouseEnterHandler} 
            onMouseLeave={this.onMouseOffHandler}
            >
                <div className="track-item-left">
                    <div className="track-play-position" >
                        {this.state.isHovering ? 
                        <span onClick={this.pressPlay} className="material-symbols-outlined">play_arrow</span>
                         : (this.props.position + 1)}
                    </div>
                    <div className="track-text">
                        <p className="track-title">{this.props.track.name}</p>
                        <p className="track-subtitle">
                            {this.props.trackType === "search" ? this.props.artist : <Link to={`/artists/${this.props.track.artist_id}`}>
                                {this.props.artist}
                            </Link>}
                        </p>
                    </div>
                </div>
                <p className="track-album-link track-subtitle">
                    {this.albumLinkRender()}
                </p> 
                <div className="track-item-right">
                    <div className="track-right-hoverables">
                        {this.state.isHovering ? <span className="material-symbols-outlined">favorite</span> :"" }
                    </div>
                    <p>{this.props.track.duration}</p>
                    <div className="track-right-hoverables">
                        {this.state.isHovering ? 
                        <TrackDropdownContainer album={this.props.track.album_id} trackType={this.props.trackType} artist={this.props.track.artist_id} 
                        track={this.props.track}/>
                        :"" }
                    </div>                    
                </div>
            </li>
        )
    }
    

}



export default TrackIndexItem;