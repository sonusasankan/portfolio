import React, { Component } from 'react';
import Header from './components/header/Header';
import Main from './Main'; 
import './App.css';

class App extends Component {
  render() {
    return (
     <div className="pf-main-wrapper">
      <Header className="default-header" /> 
      <Main/>
     </div>
    );
  }
}

export default App;
