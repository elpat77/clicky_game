
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



const picArr = [{ "id": "aguilas", "src": Aguilas }, { "id": "barcelona", "src": Barza }]

class Logos extends Component {

    constructor() {
        super();
        this.state = {
            correct: true,
            logoData: {},
            selected: [],
            correctGuesses: 0,
            maxScore: 0,
        };
        this.addToCounter = this.addToCounter.bind(this);
        this.setLogoData = this.setLogoData.bind(this);
    }
    addToCounter(e) {
        console.log("on this...", e.target.id)
        let selected = this.state.selected;
        let correctGuesses = this.state.correctGuesses;
        for (let i = 0; i < selected.length; i++) {
            if (selected[i] === e.target.id) {
                console.log("oh! selected before...")
                this.setState({ selected: [], correctGuesses: 0 })
                return;
                //break gaem, calculate scores, and restart
            } else {
                correctGuesses++;
            }
        }
        selected.push(e.target.id)
        this.setState({ selected: selected, correctGuesses })
        //this.setState({ counter: this.state.counter + 1 });
    }

    setLogoData(data) {
        this.setState({ logoData: data })
    }

    render() {

        let total = picArr.map((item, index) => {
            return <img key={index} id={item.id} className="logos" src={item.src} onClick={this.addToCounter} />
        })
        return (
            <div>
                <NAV correctGuesses={this.state.correctGuesses} />
                {total}
            </div>
        )
        return [
            <div className="App1">
                <img id="Aguilas" className="logos" src={Aguilas} alt="logo" onClick={this.addToCounter} />
                <img id="Barza" className="logos" src={Barza} alt="logo" onClick={this.addToCounter} />
                <img id="Bayern" className="logos" src={Bayern} alt="logo" onClick={this.addToCounter} />
                <img id="Chelsea" className="logos" src={Chelsea} alt="logo" onClick={this.addToCounter} />
                <img id="Juve" className="logos" src={Juve} alt="logo" onClick={this.addToCounter} />
                <img id="Liverpool" className="logos" src={Liverpool} alt="logo" onClick={this.addToCounter} />
                <img id="ManU" className="logos" src={ManU} alt="logo" onClick={this.addToCounter} />
                <img id="PSG" className="logos" src={PSG} alt="logo" onClick={this.addToCounter} />
                <img id="River" className="logos" src={River} alt="logo" onClick={this.addToCounter} />
                <img id="RM" className="logos" src={RM} alt="logo" onClick={this.addToCounter} />
                <img id="Roma" className="logos" src={Roma} alt="logo" onClick={this.addToCounter} />
                <img id="Wolves" className="logos" src={Wolves} alt="logo" onClick={this.addToCounter} />
                <img id="Ajax" className="logos" src={Ajax} alt="logo" onClick={this.addToCounter} />
                <img id="Arsenal" className="logos" src={Arsenal} alt="logo" onClick={this.addToCounter} />
                <img id="Galaxy" className="logos" src={Galaxy} alt="logo" onClick={this.addToCounter} />
                <img id="Milan" className="logos" src={Milan} alt="logo" onClick={this.addToCounter} />
            </div>
        ];
    }
}


export default Logos;
// export default imageLoader;


