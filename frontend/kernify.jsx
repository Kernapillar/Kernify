import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/root"
import configureStore from './store/store'
import * as ActionTest from './actions/music_actions'
import * as PlaylistTest from './actions/playlist_actions'
import * as PlayerTest from "./actions/player_actions"
// import '../node_modules/font-awesome/css/font-awesome.min.css'; 
// import '@fortawesome/fontawesome-free/css/all.min.css';


document.addEventListener("DOMContentLoaded", () => {
    let store;
if (window.currentUser) {
    const preloadedState = {
        entities: {
        users: { [window.currentUser.id]: window.currentUser }
        },
        session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
    } else {
    store = configureStore();
    }
    const root = document.getElementById("root");
    ReactDOM.render(<Root store={store} />, root);
    
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.fetchAllArtists = ActionTest.fetchAllArtists
  window.fetchArtist = ActionTest.fetchArtist
  window.fetchAllAlbums = ActionTest.fetchAllAlbums
  window.fetchAlbum = ActionTest.fetchAlbum
  window.fetchAllTracks = ActionTest.fetchAllTracks
  window.fetchHome = ActionTest.fetchHome
  window.fetchAllPlaylists = PlaylistTest.fetchAllPlaylists

  window.fetchPlaylist = PlaylistTest.fetchPlaylist
  window.createPlaylist = PlaylistTest.createPlaylist
  window.updatePlaylist = PlaylistTest.updatePlaylist
  window.deletePlaylist = PlaylistTest.deletePlaylist
  window.createPlaylistItem = PlaylistTest.createPlaylistItem
  window.deletePlaylistItem = PlaylistTest.deletePlaylistItem
  
  window.fetchQueue = PlayerTest.fetchQueue
  window.playTrack = PlayerTest.playTrack



});



