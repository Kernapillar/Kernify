import AudioPlayer from "./audio_player";
import { connect } from "react-redux";
import AudioPlayerTest from "./testplayer";


const mSTP = (state) => {
    console.log(state.entities.player)
    return ({
        player: state.entities.player, 
        tracks: state.entities.tracks, 
        playing: state.entities.playing
    })
}



export default connect(mSTP)(AudioPlayer);
// export default connect(mSTP)(AudioPlayerTest);