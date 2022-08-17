import React from "react";
import AudioPlayerContainer from "../audio_player_components/audio_player_container"
import PopupContainer from "../content_components/popup_components/popup_container"

const MusicPlayer = () => (
    <div className="music-player">
        <AudioPlayerContainer />
        <PopupContainer/>
    </div>
)

export default MusicPlayer;