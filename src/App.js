import React from 'react';
import logo from './logo.svg';
import Form from './components/form'
import './scss/main.scss'


function App() {
  return (
    <div className="App">
      <header>
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
      </header>
      <div className="container">
        <Form/>
      </div>

    </div>
  );
}

export default App;
