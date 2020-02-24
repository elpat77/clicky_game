import React, { useState } from 'react';
import './App.css';

// function App() {
//   const [appState, changeState] = useState({
//     activeObject: null,
//     counter: 0,
//     objects: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]
//   });

//   function toggleActive(index) {
//     changeState({ ...appState, counter: appState.counter + 1, activeObject: appState.objects[index] });
//   }

//   function toggleActiveStyles(index) {
//     if (appState.objects[index] === appState.activeObject) {
//       return "box active";
//     } else {
//       return "box inactive";
//     }
//   }


//   return (
//     <div className="App">
//       {appState.objects.map((elements, index) => (
//         <div
//           key={index}
//           className={toggleActiveStyles(index)}
//           onClick={() => {
//             toggleActive(index);
//           }}>

//         </div>
//       ))}
//     </div>
//   );
// }

// import React, { Component } from 'react';
// import './App.css';
import NAV from './components/Nav/Nav';
import Logos from './components/Logos/Logos';


class App extends Component {
    constructor() {
        super();
        this.state = {
            logoData: {},
            counter: 0,
            selected: [],
            correctGuesses: 0,
            maxScore: 0,
        };
        this.addToCounter = this.addToCounter.bind(this);
        ;
    }

    addToCounter() {
        this.setState({ counter: this.state.counter + 1 });
    }



    render() {
        return (
            <div className="App">
                <NAV />
                <div className="row mx-auto justify-content-center mt-5 col-md-7">
                    <button onClick={this.addToCounter}>Click me to add</button>
                    <Logos />
                </div>
            </div>
        )
    }
}

export default App;

