import React from 'react';
import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Site from './components/SiteWrapper/Site';
import { SpinnerSiteRefresh } from './components/APISimulate/ClassTimer';
import './components/APISimulate/class.css'

function App() {

  return (
    <div >
      <SpinnerSiteRefresh />
      {Site()}
    </div>
  );
}

export default App;


// className="App"
//  <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>