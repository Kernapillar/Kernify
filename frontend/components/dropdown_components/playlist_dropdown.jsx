import React from "react";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Popup from "../content_components/popup_components/popup";


const PlaylistDropdown = (props) => {
    
    const [open, setOpen] = useState(false);
    const container = useRef(null)

    const clickOutside = (e) => {
        if(container.current && !container.current.contains(e.target)){
            setOpen(false);
        }
    }

    useEffect(() => {
        document.addEventListener("click", clickOutside);
        return () => {
            document.removeEventListener("click", clickOutside);
        };
    });

    const handlePopup = (playlistId, trackId) => {
        props.createPlaylistItem({playlist_id: playlistId, track_id: trackId})
    }

    return (
        <div className="dropdown-container" ref={container}>
            <button className="dropdown-button" onClick={() => setOpen(!open)}>
                add to playlist
            </button>

            {open ? (
                <div className="playlist-dropdown-wrapper">
                    <ul>
                        <li className="dropdown-item"> <Link to="/playlists/create"> Create playlist </Link> </li>
                        <li><hr /></li>
                        {props.playlists.filter(plist => plist.user_id === props.currentUser).map(playlist => <li 
                        onClick={() => handlePopup(playlist.id, props.track.id)} key={playlist.id} 
                        className="dropdown-item"> {playlist.name} </li> )}
                    </ul>
                </div>
            ) 
            : null

        }
        </div>
    )

}

export default PlaylistDropdown;