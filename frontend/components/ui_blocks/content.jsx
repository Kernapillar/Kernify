import React from "react";
import ArtistIndexContainer from "../content_components/artist_index_container";
import TrackIndexContainer from "../content_components/track_index_container";
import { Route, Switch } from "react-router-dom";
import AlbumShowContainer from "../content_components/album_show_container";
import ArtistShowContainer from "../content_components/artist_show_container"

const Content = () => (
    <div className="content-block">
        <Switch>
            <Route exact path="/albums/:albumId" component={AlbumShowContainer}/>
            <Route exact path="/artists/:artistId" component={ArtistShowContainer}/>

        </Switch>


        

        {/* <ArtistIndexContainer />
        <TrackIndexContainer/>  */}
    </div>
)
export default Content;