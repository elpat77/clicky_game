import React from 'react'
import './nav.css'

function Nav(props) {
    return (
        <nav className="navigation">
            <div className="row">
                <div className="logo">
                    <h1 className="link" id="alert">{props.alert}</h1>
                </div>
            </div>
            <div className="row">
                <div className="nav_links">
                    <div className="link" id="yourScore">Your Score: {props.correctGuesses}</div>
                    <div className="link" id="maxScore">Maximum Score: {props.maxScore}</div>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
