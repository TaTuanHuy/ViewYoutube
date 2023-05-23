import React from 'react';
import './App.css';
import Layout from "./Layout"
import { Outlet, Link } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Layout />
    </div>
  );
}

export default App;
