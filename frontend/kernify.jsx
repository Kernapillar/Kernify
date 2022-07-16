import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/root"
import configureStore from './store/store'
import * as ActionTest from './actions/music_actions'
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


  

});



