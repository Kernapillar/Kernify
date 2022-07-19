import React from "react";
import { Link } from "react-router-dom";
import UserDropdown from "../dropdown_components/user_dropdown";

const Greeting = ({ currentUser, logout }) => {
    
    return (
        <div className='logout-container' >
            <UserDropdown button={`${currentUser.username}`} logout={logout}/>
        </div>
    )
}


export default Greeting;