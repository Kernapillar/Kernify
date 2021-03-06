import * as MusicAPI from "../util/music_api_util"

export const RECEIVE_HOME_PAGE = "RECEIVE_HOME_PAGE";

export const RECEIVE_ALL_ARTISTS = "RECEIVE_ALL_ARTISTS";
export const RECEIVE_ARTIST = "RECEIVE_ARTIST";

export const RECEIVE_ALL_ALBUMS = "RECEIVE_ALL_ALBUMS";
export const RECEIVE_ALBUM = "RECEIVE_ALBUM";

export const RECEIVE_ALL_TRACKS = "RECEIVE_ALL_TRACKS";

const receiveHomePage = ({artists, albums, playlists}) => ({
    type: RECEIVE_HOME_PAGE,
    artists, 
    albums, 
    playlists
})

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
const receiveAlbum = ({ artist, album, tracks }) => ({
    type: RECEIVE_ALBUM,
    artist,
    album,
    tracks
})

const receiveAllTracks = (tracks) => ({
    type: RECEIVE_ALL_TRACKS,
    tracks
})

export const fetchHome = () => dispatch => {
    MusicAPI.fetchHome()
    .then(payload => dispatch(receiveHomePage(payload)))
}


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