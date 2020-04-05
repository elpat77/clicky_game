import React from 'react'
import './nav.css'
import App from '../../App';

function Nav(props) {
    return (
        <nav className="navigation">
            <div class="container">
                <div className="row justify-content-center">
                    <div className="logo">
                        <h1 className="link" id="alert">{props.alert}</h1>
                    </div>
                </div>
                <div className="row justify-content-center mx-3 my-3">
                    <h3 clasName="instructions"> Can you go click on all the logos without <br></br>selecting the same logo twice?</h3>
                </div>
                <div className="row justify-content-center">
                    <div className="nav_links">
                        <h3 className="link" id="yourScore">Your Score: {props.correctGuesses}</h3>
                        <h3 className="link" id="maxScore">Maximum Score: {props.maxScore}</h3>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
