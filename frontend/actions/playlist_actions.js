import * as PlaylistAPI from "../util/playlist_util"

export const RECEIVE_ALL_PLAYLISTS = 'RECEIVE_ALL_PLAYLISTS';
export const RECEIVE_PLAYLIST = 'RECEIVE_PLAYLIST';
export const REMOVE_PLAYLIST = 'REMOVE_PLAYLIST';
export const CREATE_PLAYLIST_ITEM = 'CREATE_PLAYLIST_ITEM';
export const DELETE_PLAYLIST_ITEM = 'DELETE_PLAYLIST_ITEM'

const receiveAllPlaylists = (playlists) => ({
    type: RECEIVE_ALL_PLAYLISTS, 
    playlists
})

const receivePlaylist = ({playlist, tracks}) => ({
    type: RECEIVE_PLAYLIST, 
    playlist, 
    tracks
})

const removePlaylist = (playlistId) => ({
    type: REMOVE_PLAYLIST,
    playlistId
})


export const fetchAllPlaylists = () => dispatch => {
    return PlaylistAPI.fetchAllPlaylists()
    .then(playlists => dispatch(receiveAllPlaylists(playlists)))
}

export const fetchPlaylist = (playlistId) => dispatch => {
    return PlaylistAPI.fetchPlaylist(playlistId)
    .then(playlist => dispatch(receivePlaylist(playlist)))
}

export const createPlaylist = (playlist) => dispatch => {
    return PlaylistAPI.createPlaylist(playlist)
    .then(playlist => dispatch(receivePlaylist(playlist)))
}

export const updatePlaylist = (playlist) => dispatch => {
    return PlaylistAPI.updatePlaylist(playlist)
    .then(playlist => dispatch(receivePlaylist(playlist)))
}

export const deletePlaylist = (playlistId) => dispatch => {
    return PlaylistAPI.deletePlaylist(playlistId)
    .then(() => dispatch(removePlaylist(playlistId)))
}

export const createPlaylistItem = (playlistItem) => () => {
    return PlaylistAPI.createPlaylistItem(playlistItem)
}

export const deletePlaylistItem = (playlistItemId) => () => {
    return PlaylistAPI.deletePlaylistItem(playlistItemId)
}