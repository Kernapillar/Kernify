import React from "react";
import { Link } from "react-router-dom"

const SideBar = () => (
    <div className="sidebar">
        <Link to="/"> <button><span className="material-symbols-outlined">home</span>
    &nbsp; Home</button></Link>
        <br />
        <Link to="/albums"> <button><span className="material-symbols-outlined">library_music</span>
    &nbsp; Albums</button></Link>
        <br />
        <Link to="/artists"> <button><span className="material-symbols-outlined">person</span>
    &nbsp; Artists</button></Link>
        <br />
        
        <Link to="/playlists"> <button><span className="material-symbols-outlined">queue_music</span>
    &nbsp; Playlists</button></Link>
        
        <br />
        <Link to="/playlists/create"> <button><span className="material-symbols-outlined">add_box</span>
    &nbsp; Create Playlist</button></Link>
    
    </div>
)

export default SideBar;