import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/root"
import configureStore from './store/store'
import * as ActionTest from './actions/session_actions'

document.addEventListener("DOMContentLoaded", () => {
    const store = configureStore();
    const root = document.getElementById("root");
    ReactDOM.render(<Root store={store} />, root);
    
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  

});


// re-add apiutils to the window for testing
// figure out why the greetings dont work?
// finish user auth
