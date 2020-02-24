
import React from 'react';
import './logos.css';
import Aguilas from '../../Images/Aguilas.jpg'
import Barza from '../../Images/barcelona.jpg'
import Bayern from '../../Images/Bayern.png'
import Chelsea from '../../Images/chelsea.jpeg'
import Juve from '../../Images/Juve.gif'
import Liverpool from '../../Images/Liverpool.png'
import ManU from '../../Images/manU.jpeg'
import Atleti from '../../Images/Atleti.png'
import PSG from '../../Images/PSG.png'
import River from '../../Images/River.jpeg'
import RM from '../../Images/RM.png'
import Roma from '../../Images/Roma.jpg'
import Wolves from '../../Images/Wolves.png'
import Ajax from '../../Images/Ajax.jpg'
import Arsenal from '../../Images/Arsenal.gif'
import Galaxy from '../../Images/Galaxy.png'
import Milan from '../../Images/Milan.png'




function Logos(props) {
    return (
        <main className="container">
            <img className="logos" src={Aguilas} alt="logo" />
            <img className="logos" src={Barza} alt="logo" />
            <img className="logos" src={Bayern} alt="logo" />
            <img className="logos" src={Chelsea} alt="logo" />
            <img className="logos" src={Juve} alt="logo" />
            <img className="logos" src={Liverpool} alt="logo" />
            <img className="logos" src={ManU} alt="logo" />
            <img className="logos" src={Atleti} alt="logo" />
            <img className="logos" src={PSG} alt="logo" />
            <img className="logos" src={River} alt="logo" />
            <img className="logos" src={RM} alt="logo" />
            <img className="logos" src={Roma} alt="logo" />
            <img className="logos" src={Wolves} alt="logo" />
            <img className="logos" src={Ajax} alt="logo" />
            <img className="logos" src={Arsenal} alt="logo" />
            <img className="logos" src={Galaxy} alt="logo" />
            <img className="logos" src={Milan} alt="logo" />
        </main>
    );
}

export default Logos;


