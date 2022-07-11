import React from "react";
import { Link } from "react-router-dom";

const Greeting = ({ currentUser, logout }) => {
    
    const loginOrSignIn = () => (
        <nav className="login-signup">
            <Link to="/signup">Sign up</Link> or 
            <Link to="/login">Log in</Link>
        </nav>
    );

    const logOutButton = () => (
        <div className='logout-container' >
            <h2>othertxt {currentUser.username}</h2>
            <button className="logout-button" onClick={logout}>Log Out</button>
        </div>
    )
    return currentUser ? logOutButton() : loginOrSignIn()
}


export default Greeting;