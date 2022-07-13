import * as MusicAPI from "../util/music_api_util"

export const RECEIVE_ALL_ARTISTS = "RECEIVE_ALL_ARTISTS";
export const RECEIVE_ARTIST = "RECEIVE_ARTIST";

export const RECEIVE_ALL_ALBUMS = "RECEIVE_ALL_ALBUMS";
export const RECEIVE_ALBUM = "RECEIVE_ALBUM";

export const RECEIVE_ALL_TRACKS = "RECEIVE_ALL_TRACKS";

const receiveAllArtists = (artists) => ({
    type: RECEIVE_ALL_ARTISTS,
    artists
})
const receiveArtist = ({artist, albums, tracks}) => ({
    type: RECEIVE_ARTIST,
    artist, 
    albums, 
    tracks
})

const receiveAllAlbums = (albums) => ({
    type: RECEIVE_ALL_ALBUMS,
    albums
})
const receiveAlbum = ({album, tracks}) => ({
    type: RECEIVE_ALBUM,
    album,
    tracks
})

const receiveAllTracks = (tracks) => ({
    type: RECEIVE_ALL_TRACKS,
    tracks
})

export const fetchAllArtists = () => dispatch => {
    return MusicAPI.fetchAllArtists()
    .then(artists => dispatch(receiveAllArtists(artists)))
}

export const fetchArtist = (artistId) => dispatch => {
    return MusicAPI.fetchArtist(artistId)
    .then(artist => dispatch(receiveArtist(artist)))
}

export const fetchAllAlbums = () => dispatch => {
    return MusicAPI.fetchAllAlbums()
    .then(albums => dispatch(receiveAllAlbums(albums)))
}

export const fetchAlbum = (albumId) => dispatch => {
    return MusicAPI.fetchAlbum(albumId)
    .then(album => dispatch(receiveAlbum(album)))
}

export const fetchAllTracks = () => dispatch => {
    return MusicAPI.fetchAllTracks()
    .then(tracks => dispatch(receiveAllTracks(tracks)))
}