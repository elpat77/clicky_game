
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
            correct: true,
            correctGuesses: 0,
            maxScore: 0,
            shuffle: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
        };
        this.addToScore = this.addToScore.bind(this);
    }

    addToScore(e) {
        let display = this.state.shuffle;
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
                    correctGuesses: 0,
                    maxScore: newScore,
                });
                console.log("new score", newScore)
                console.log("correct", correctGuesses)
                return;

            } else {
                this.setState({
                    shuffle: display,
                })

                console.log("correct");

            }
        }
        selected.push(e.target.id)
        this.setState({ selected: selected, correctGuesses, maxScore })
        //this.setState({ counter: this.state.counter + 1 });
    }

    setLogoData(data) {
        this.setState({ logoData: data })
    }

    render() {

        let total = picArr.map((item, index) => {
            return <img key={index} id={item.id} className="logos" src={item.src} onClick={this.addToScore} />
        })
        return (
            <div>
                <NAV correctGuesses={this.state.correctGuesses} maxScore={this.state.maxScore} />
                {total}
            </div>
        )
    }
}


export default Logos;
// export default imageLoader;


