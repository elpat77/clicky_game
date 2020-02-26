import React from 'react'
import './nav.css'

function Nav(props) {
    return (
        <nav className="navigation">
            <div className="logo">
                <h3>Clicky Game</h3>
            </div>
            <div className="logo">
                <h3>Click on any Picture to start</h3>
            </div>
            <div className="nav_links">
                <div className="link" id="yourScore">Your Score: {props.correctGuesses}</div>
                <div className="link" id="maxScore">Maximum Score: {props.maxScore}</div>
            </div>

        </nav>
    );
};

export default Nav;
