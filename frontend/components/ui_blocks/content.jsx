import React from "react";
import ArtistIndexContainer from "../content_components/artist_index_container";
import TrackIndexContainer from "../content_components/track_index_container"

const Content = () => (
    <div className="content-block">
        <ArtistIndexContainer />
        <TrackIndexContainer/> 
    </div>
)
export default Content;