import AudioPlayer from "./audio_player";
import { connect } from "react-redux";
import { fetchQueue, playTrack } from "../../actions/player_actions";
import { fetchIsPlaying, receiveStartPlaying, receiveStopPlaying } from "../../actions/player_actions";


const mSTP = (state) => {
    console.log(state.entities.player)
    return ({
        player: state.entities.player, 
        tracks: state.entities.tracks, 
        playing: state.entities.playing
    })
}

const mDTP = (dispatch) => {
    return ({
        fetchQueue: tracks => dispatch(fetchQueue(tracks)),
        playTrack: track => dispatch(playTrack(track)),
        fetchIsPlaying: () => dispatch(fetchIsPlaying()),
        startPlaying: () => dispatch(receiveStartPlaying()),
        stopPlaying: () => dispatch(receiveStopPlaying())

    })
}

export default connect(mSTP, mDTP)(AudioPlayer);