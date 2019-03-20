import React, { Component } from 'react';
import TheDate from './state/TheDate';
import Counter from './state/Counter';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <TheDate />
        <Counter />
      </div>
    );
  }
}

export default App;