import React, { Component } from 'react';
import Header from '../Header';
import Column from '../Column';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="main-body">
          <Column className="jimmy-column" label="Jimmy" />
          <Column className="bernice-column" label="Bernice" />
          <Column className="walkin-column" label="Walk-in" />
        </div>
      </div>
    );
  }
}

export default App;
