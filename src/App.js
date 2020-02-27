import React, { Component } from 'react';
import './App.css';
import Logos from './components/Logos/Logos';



class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="row mx-auto col-md-6">
          <Logos />
        </div>
      </div>
    )
  }
}

export default App;





