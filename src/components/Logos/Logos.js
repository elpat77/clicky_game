
import React, { Component } from 'react';
import NAV from '../../components/Nav/Nav';

import './logos.css';
import Aguilas from '../../Images/Aguilas.jpg'
import Barza from '../../Images/barcelona.jpg'
import Bayern from '../../Images/Bayern.png'
import Chelsea from '../../Images/chelsea.jpeg'
import Juve from '../../Images/Juve.gif'
import Liverpool from '../../Images/Liverpool.png'
import ManU from '../../Images/manU.jpeg'
import PSG from '../../Images/PSG.png'
import River from '../../Images/River.jpeg'
import RM from '../../Images/RM.png'
import Roma from '../../Images/Roma.jpg'
import Wolves from '../../Images/Wolves.png'
import Ajax from '../../Images/Ajax.jpg'
import Arsenal from '../../Images/Arsenal.gif'
import Galaxy from '../../Images/Galaxy.png'
import Milan from '../../Images/Milan.png'



const picArr = [
    { "id": "aguilas", "src": Aguilas },
    { "id": "barcelona", "src": Barza },
    { "id": "bayern", "src": Bayern },
    { "id": "chelsea", "src": Chelsea },
    { "id": "juventus", "src": Juve },
    { "id": "liverpool", "src": Liverpool },
    { "id": "manchester", "src": ManU },
    { "id": "psg", "src": PSG },
    { "id": "river", "src": River },
    { "id": "realmadrid", "src": RM },
    { "id": "roma", "src": Roma },
    { "id": "wolves", "src": Wolves },
    { "id": "ajax", "src": Ajax },
    { "id": "arsenal", "src": Arsenal },
    { "id": "galaxy", "src": Galaxy },
    { "id": "milan", "src": Milan },
]

class Logos extends Component {

    constructor() {
        super();
        this.state = {
            selected: [],
            winner: true,
            correctGuesses: 0,
            maxScore: 0,
            alert: 'Select each logo once and only once...',
            data: picArr,

        };
        this.addToScore = this.addToScore.bind(this);
    }

    addToScore(e) {
        let display = this.state.data;
        console.log("arr", display)
        display.sort(() => {
            return 0.5 - Math.random();
        });

        console.log("clicked on...", e.target.id)
        let selected = this.state.selected;
        let correctGuesses = this.state.correctGuesses + 1;
        let maxScore = this.state.maxScore;

        for (let i = 0; i < selected.length; i++) {

            //break game, calculate scores, and restart
            if (selected[i] === e.target.id) {
                let newScore = this.state.maxScore;
                if (this.state.correctGuesses > this.state.maxScore) {
                    newScore = this.state.correctGuesses;
                }

                console.log("oh! selected before...")

                this.setState({
                    selected: [],
                    // alert: "Logo already chosen, try again!",
                    correctGuesses: 0,
                    shuffle: display,
                    maxScore: newScore,
                    winner: false
                });
                setTimeout(function () { alert("Sorry game over, try again") });
                console.log("new score", newScore)
                console.log("correct", correctGuesses)
                return;

            } else {
                if (correctGuesses >= 16) {
                    this.setState({
                        selected: [],
                        shuffle: display,
                        winner: true
                    })
                    setTimeout(function () { alert("Congratulations you win!") });
                    return;
                }

            }
        }
        selected.push(e.target.id)
        this.setState({ selected: selected, correctGuesses, maxScore })
    }

    render() {
        let total = picArr.map((item, index) => {
            return <img key={index} id={item.id} className="logos" src={item.src} onClick={this.addToScore} />
        })
        return (
            <div>
                <div>
                    <NAV correctGuesses={this.state.correctGuesses} maxScore={this.state.maxScore} alert={this.state.alert} />
                </div>
                <div className="logoContainer">
                    {total}
                </div>
            </div>
        )
    }
}


export default Logos;



