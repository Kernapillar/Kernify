import React from "react";
import { Link } from "react-router-dom"

const SideBar = () => ( 
    <>
        <div className="sidebar">
            <nav>
            <Link to="/"> <img src="https://kernify-seed.s3.us-west-1.amazonaws.com/kernify_logo.png" alt="Kernify Logo" />
            </Link>
            <Link to="/"> <button><span className="material-symbols-outlined">home</span>
            &nbsp; Home</button></Link>
            <br />

            <Link to="/search"> <button><span className="material-symbols-outlined">search</span>
            &nbsp; Search</button></Link>
            <br />

            <Link to="/artists"> <button><span className="material-symbols-outlined">person</span>
            &nbsp; Artists</button></Link>
            <br />

            <Link to="/albums"> <button><span className="material-symbols-outlined">library_music</span>
            &nbsp; Albums</button></Link>
            <br />
            
            <Link to="/playlists"> <button><span className="material-symbols-outlined">queue_music</span>
            &nbsp; Playlists</button></Link>
            
            <br />
            <Link to="/playlists/create"> <button><span className="material-symbols-outlined">add_box</span>
            &nbsp; Create Playlist</button></Link>

            </nav>
        
        <div className="social">
            <a href="https://github.com/Kernapillar/Kernify" target="_blank"> 
                <img className="social-link" src="https://kernify-seed.s3.us-west-1.amazonaws.com/github_white_logo.png" alt="github link" />
            </a>
            <a href="https://www.linkedin.com/in/alex-kern-8978301b4/" target="_blank"> 
                <img className="social-link" src="https://kernify-seed.s3.us-west-1.amazonaws.com/linkedin_white_logo.png" alt="github link" />
            </a>
        </div>
        </div>
    </>
)

export default SideBar;