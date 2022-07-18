import React from "react";
import ArtistIndexContainer from "../content_components/artist_components/artist_index_container";
import TrackIndexContainer from "../content_components/track_components/track_index_container";
import { Route, Switch } from "react-router-dom";
import HomeIndexContainer from "../content_components/home_index_container"
import AlbumShowContainer from "../content_components/album_components/album_show_container";
import ArtistShowContainer from "../content_components/artist_components/artist_show_container";
import AlbumIndexContainer from "../content_components/album_components/album_index_container";
import PlaylistIndexContainer from "../content_components/playlist_components/playlist_index_container"
import PlaylistShowContainer from "../content_components/playlist_components/playlist_show_container"

const Content = () => (
    <div className="content-block">
        <Switch>
            <Route exact path="/" component={HomeIndexContainer}/>
            <Route exact path="/albums/" component={AlbumIndexContainer}/>
            <Route exact path="/albums/:albumId" component={AlbumShowContainer}/>
            <Route exact path="/artists/" component={ArtistIndexContainer}/>
            <Route exact path="/artists/:artistId" component={ArtistShowContainer}/>
            {/* <Route exact path="/playlists/" component={PlaylistIndexContainer}/> */}
            <Route exact path="/playlists/:playlistId" component={PlaylistShowContainer}/>

        </Switch>


        

        
    </div>
)
export default Content;