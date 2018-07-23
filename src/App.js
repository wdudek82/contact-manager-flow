import React, { Component } from 'react';
import Header from './components/Header';
import Contact from './components/Contacts';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Contact />
      </div>
    );
  }
}

export default App;
