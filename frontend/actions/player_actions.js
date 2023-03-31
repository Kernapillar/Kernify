// export const RECEIVE_NEXT_TRACK = "RECEIVE_NEXT_TRACK";
// export const RECEIVE_PREV_TRACK = "RECEIVE_PREV_TRACK";
export const SET_CURRENT_TRACK = "SET_CURRENT_TRACK";
export const RECEIVE_QUEUE = "RECEIVE_QUEUE";
export const IS_PLAYING = "IS_PLAYING";
export const START_PLAYING = "START_PLAYING";
export const STOP_PLAYING = "STOP_PLAYING"


const isPlaying = () => {
    return({
        type: IS_PLAYING,
        
    })
}

const setCurrentTrack = (trackId) => {
    return({
        type: SET_CURRENT_TRACK,
        trackId
    })
}

const receiveQueue = (tracks) => {
    return ({
        type: RECEIVE_QUEUE, 
        tracks
    })
}

const startPlaying = () => {
    return ({
        type: START_PLAYING
    })
}
const stopPlaying = () => {
    return ({
        type: STOP_PLAYING
    })
}


export const playTrack = (trackId) => (dispatch) => {
    console.log(trackId)
    dispatch(setCurrentTrack(trackId))
}

export const fetchQueue = (tracks) => (dispatch) => {
    dispatch(receiveQueue(tracks))
}

export const fetchIsPlaying = () => (dispatch) => {
    dispatch(isPlaying())
}
export const receiveStartPlaying = () => (dispatch) => {
    dispatch(startPlaying())
}
export const receiveStopPlaying = () => (dispatch) => {
    dispatch(stopPlaying())
}