import React from "react";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";


const PlaylistShowOptionsDropdown = (props) => {
    const [open, setOpen] = useState(false);
    const container = useRef(null)

    const clickOutside= (e) => {
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

 
    return (

        <div className="dropdown-container" ref={container}>
            <button className="dropdown-button" onClick={() => setOpen(!open)}>
            <span className="material-symbols-outlined">more_horiz</span>
            </button>

            {open ? (
                <div className="dropdown-wrapper">
                    <ul>
                        <Link to={`/playlists/update/${props.playlistId}`}><li className="dropdown-item"> 
                            <p className="logout-button"> Edit Playlist</p> 
                            </li>
                        </Link>
                        <li className="dropdown-item"> <p className="logout-button" 
                            onClick={() => props.deletePlaylist(props.playlistId).then(() => 
                        {props.history.push("/playlists/")})}>Delete Playlist</p> 
                        </li>

                    </ul>
                </div>
            ) 
            : null
        }
        </div>


    )

}

export default PlaylistShowOptionsDropdown;