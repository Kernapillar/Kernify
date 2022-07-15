import React from "react";
import TrackIndexItem from "./track_index_item";

class TrackIndex extends React.Component {

    

    render() {
        if (!this.props.tracks) {
            return null 
        } else {

        return (
            <ul className="track-list-container">
                <div className="track-header">
                    <div className="track-item-left">
                        <div className="track-play-position"> 
                            <p className="track-subtitle">#</p> 
                        </div>
                        <div className="track-text">
                            <p className="track-subtitle">TITLE</p> 
                        </div>

                    </div>
                    <div className="track-header-right">
                            <i className="fa fa-clock-o track-subtitle"></i>
                    </div>
                </div>
                <hr  className="track-list-hr"/>
                {this.props.tracks.map((track, index) => <TrackIndexItem key={track.id} track={track} artist={this.props.artist} position={index} />)}

            </ul>
        )}
    }
}

export default TrackIndex;