import React from "react";
import TrackIndexItem from "./track_index_item";
import { Link } from "react-router-dom";


class TrackIndex extends React.Component {

    trackTypeCheck = () => {
        // console.log("Found track type check! props: ", this.props)
        if (this.props.trackType === "playlist") {
            return this.props.tracks.map((track, index) => <TrackIndexItem fetchQueue={this.props.fetchQueue} playTrack={this.props.playTrack} tracksObject={this.props.tracks} key={track.id} artist={track.artist} trackType="playlist" album={track.album} track={track} position={index} />)
        } else if  (this.props.trackType === "search") {
            return this.props.tracks.map((track, index) => <Link to={`/albums/${track.album_id}`} key={`searchKey-${track.id}`}> <TrackIndexItem  tracksObject={this.props.tracks} fetchQueue={() => {return null}} playTrack={() => {return null}} key={track.id} artist={track.artist} trackType="search" album={track.album} track={track} position={index} /> </Link>)
        } else if  (this.props.trackType === "album") {
            return this.props.tracks.map((track, index) => <TrackIndexItem fetchQueue={this.props.fetchQueue} playTrack={this.props.playTrack} tracksObject={this.props.tracks} key={track.id} track={track} trackType="album" artist={track.artist} position={index} />)
        } else {
            return this.props.tracks.map((track, index) => <TrackIndexItem fetchQueue={this.props.fetchQueue} playTrack={this.props.playTrack} tracksObject={this.props.tracks} key={track.id} track={track} trackType="artist" artist={track.artist} position={index} />)

        }
    }
    albumColumnRender = () => {
        if (this.props.trackType === "playlist" ) {
            return <p className="track-album-header"> ALBUM</p>
        }
    }

    render() {
        if (!this.props.tracks) {
            return null 
        } else {
            // console.log("made it to tracks", this.props)

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
                    <div>
                        <div className="track-subtitle">
                            {this.albumColumnRender()}
                        </div>
                    </div>
                    <div className="track-header-right">
                    <span className="material-symbols-outlined">schedule</span>
                    </div>
                </div>
                <hr  className="track-list-hr"/>
                {this.trackTypeCheck()}

            </ul>
        )}
    }
}

export default TrackIndex;