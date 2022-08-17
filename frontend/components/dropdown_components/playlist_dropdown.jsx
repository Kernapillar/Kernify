import React from "react";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";


const PlaylistDropdown = (props) => {
    
    const [open, setOpen] = useState(false);
    const [popup, setPopup] = useState(false);
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
        setPopup(true);
        props.createPlaylistItem({playlist_id: playlistId, track_id: trackId})
        setTimeout(() => setPopup(false), 2000)
    }

    return (
        <>
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
            {popup ? (
                <p className="popup"> added to playlist</p>
            ) : null}
        </>


    )

}

export default PlaylistDropdown;