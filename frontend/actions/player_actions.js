export const RECEIVE_NEXT_TRACK = "RECEIVE_NEXT_TRACK";
export const RECEIVE_PREV_TRACK = "RECEIVE_PREV_TRACK";
export const SET_CURRENT_TRACK = "SET_CURRENT_TRACK";
export const RECEIVE_QUEUE = "RECEIVE_QUEUE";


const receiveNextTrack = () => {
    return ({
        type: RECEIVE_NEXT_TRACK
    })
}

const receivePrevTrack = () => {
    return ({
        type: RECEIVE_PREV_TRACK
    })
}

const setCurrentTrack = (track) => {
    return({
        type: SET_CURRENT_TRACK,
        track
    })
}

const receiveQueue = (tracks) => {
    return ({
        type: RECEIVE_QUEUE, 
        tracks
    })
}

export const nextTrack = () => (dispatch) => {
    dispatch(receiveNextTrack())
}

export const prevTrack = () => (dispatch) => {
    dispatch(receivePrevTrack())
}

export const playTrack = (track) => (dispatch) => {
    dispatch(setCurrentTrack(track))
}

export const fetchQueue = (tracks) => (dispatch) => {
    dispatch(receiveQueue(tracks))
}