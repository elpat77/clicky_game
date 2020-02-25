import React, { Component } from 'react';
import './App.css';
import Logos from './components/Logos/Logos';



class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="row mx-auto justify-content-center mt-5 col-md-6">
          <Logos />
        </div>
      </div>
    )
  }
}

export default App;





