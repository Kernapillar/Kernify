import React from "react";
import { Link } from "react-router-dom";
import CardIndex from "../card_components/card_index";
import TrackIndex from "../track_components/track_index";


class Search extends React.Component {
    constructor(props){
        super(props);
        this.state = {inputVal:""};
        this.update = this.update.bind(this);
    }

    componentDidMount() {
        window.scrollTo(0, 0)
        this.props.fetchHome();
        this.props.fetchAllTracks();
    }

    isMatching (name, input) {
        if (name.slice(0, input.length) === input) return true;
        return false
    }

    update(field) {
        return e => (this.setState({
            [field]: e.target.value
        }))
        
    }
    
    

    render() {
        if (!this.props.albums[0] || !this.props.artists[0] || !this.props.playlists[0] || !this.props.tracks[0]) {
            return null
        } else {
            const albumArr = this.props.albums.filter(album => this.isMatching(album.name.toLowerCase(), this.state.inputVal.toLowerCase()))
            const artistArr = this.props.artists.filter(artist => this.isMatching(artist.name.toLowerCase(), this.state.inputVal.toLowerCase()))
            const playlistArr = this.props.playlists.filter(playlist => this.isMatching(playlist.name.toLowerCase(), this.state.inputVal.toLowerCase()))
            const trackArr = this.props.tracks.filter(track => this.isMatching(track.name.toLowerCase(), this.state.inputVal.toLowerCase()))

            

            return <>
                <h1 className="home-welcome">Search </h1>
                <br />
                <div id="search-bar">
                <span className="material-symbols-outlined">search</span>
                    <input type="text"   onChange={this.update("inputVal")} />

                </div>
                <br />
                <br />
                {this.state.inputVal.length === 0 ? <h3>Please enter a search</h3> : 
                <>
                    
                        { trackArr.length === 0 ? null :<> 
                        <span className="home-preview-header">
                        <h3>Tracks</h3> <Link to="#"></Link> 
                        </span>
                        <br /> <TrackIndex tracks={trackArr} trackType="search"  /> 
                        </>}
                    <br />

                    
                        { artistArr.length === 0 ? null :<>
                        <span className="home-preview-header">
                        <h3>Artists</h3> <Link to="/artists"></Link> 
                        </span>
                        <br />
                         <CardIndex mediaArr={artistArr} cardType={"artist"}  /> 
                        </>}
                    <br />
                    
                  
                        { albumArr.length === 0 ? null : <> 
                            <span className="home-preview-header">
                        <h3>Albums</h3> <Link to="/albums"></Link> 
                        </span>
                        <br /><CardIndex mediaArr={albumArr} cardType={"album"}  /> 
                    </>}
                    <br />

                    
                    { playlistArr.length === 0 ? null : <><span className="home-preview-header">
                        <h3>Playlists</h3> <Link to="/playlists"></Link> 
                    </span>
                    <br /> <CardIndex mediaArr={playlistArr} cardType={"playlist"}  /> </>}
                   
                   {( this.state.inputVal.length !== 0 && artistArr.length === 0 && albumArr.length === 0 && trackArr.length === 0 && playlistArr.length === 0) ? <h3> No results found</h3> : null}
                </>}
                    
            </> 
        }
    }
}

export default Search;