import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello my react app</h1>
      </div>
    );
//return React.createElement('div',null, React.createElement('h1',{className: "App"},'Hello my react app !!!!') );
  }
}

export default App;
