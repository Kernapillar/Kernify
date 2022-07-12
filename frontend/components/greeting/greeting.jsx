import React from "react";
import { Link } from "react-router-dom";

const Greeting = ({ currentUser, logout }) => {
    
    return (
        <div className='logout-container' >
            <button className="logout-button" onClick={logout}>Log Out</button>
        </div>
    )
}


export default Greeting;