import React from "react";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import PlaylistDropdown from "./playlist_dropdown";


const TrackDropdown = (props) => {
    // console.log("trackdropdownprops", props)
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
                <i className="fa fa-ellipsis-h"></i>
            </button>

            {open ? (
                <div className="dropdown-wrapper">
                    <ul>
                        <li className="dropdown-item"> <Link to={`/artists/${props.artist}`}> go to artist </Link></li>
                        <li className="dropdown-item"> <Link to={`/albums/${props.album}`}> go to album </Link> </li>
                        <li><hr /></li>
                        <li className="dropdown-item"> <PlaylistDropdown playlists={props.playlists} track={props.track} createPlaylistItem={props.createPlaylistItem}/>    </li> 
                        {(props.trackType === "playlist") ? <li className="dropdown-item"
                        onClick={()=>props.deletePlaylistItem(props.track.playlistItem.id).then(props.fetchPlaylist())}> remove from playlist</li>  : null}
                    </ul>
                </div>
            ) 
            : null
        }
        </div>


    )

}

export default TrackDropdown;