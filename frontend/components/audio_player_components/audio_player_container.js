import AudioPlayer from "./audio_player";
import { connect } from "react-redux";


const mSTP = (state) => {
    return ({
        player: state.entities.player, 
        tracks: state.entities.tracks, 
        playing: state.entities.playing
    })
}



export default connect(mSTP)(AudioPlayer);
