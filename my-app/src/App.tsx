import React from 'react';
import './App.css';
import Header from "./header/header"
import Body from "./Body/Body"

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <div id="body">
          <Body />
      </div>
    </div>
  );
}

export default App;
