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
    
  



});



