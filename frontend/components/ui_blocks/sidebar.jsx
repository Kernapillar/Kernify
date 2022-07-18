import React from "react";
import { Link } from "react-router-dom"
const SideBar = () => (
    <div className="sidebar">
        <Link to="/"> <button><i className="fa fa-home"></i>
 &nbsp; Home</button></Link>
    <Link to="/albums"> <button><i className="fa fa-list"></i>
 &nbsp; Albums</button></Link>
 <Link to="/artists"> <button><i className="fa fa-list"></i>
 &nbsp; Artists</button></Link>
 <Link to="/playlists"> <button><i className="fa fa-list"></i>
 &nbsp; Playlists</button></Link>
    </div>
)

export default SideBar;