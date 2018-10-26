import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Switcher from './components/Switcher';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <Switcher/>
      </div>
    );
  }
}

export default App;
