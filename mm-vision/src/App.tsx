import React from 'react';
import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Site from './components/SiteWrapper/Site';
import './components/Classes/class.css'

function App() {
  
  const Component2 = () => {
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
      // Check if the component is being rendered for the first time
      
      if (isLoading) {
        // Render the loading spinner icon
        <div className="loading">Loading...</div>;
        console.log("while component 2")
        // Set the isLoading flag to false to prevent the spinner from being rendered again
        ShowLoadingIcon()
        setTimeout(()=>{
          
          // <div className="spinner-background"><div className="spinner-icon"></div></div>
          
          setIsLoading(false);
          
        }, 2000);
        
        
      }
    }, []);
    
    return <div>
      {}
      {Site()}
      </div>;
  };
  
  const ShowLoadingIcon = () => {
    // console.log("showLoadingIcon")
    
    console.log('Loading icon shown');
    // console.log(this.state.isLoading) 
    return(
      <div className="spinner-background"><div className="spinner-icon"></div></div>
    )
  };
  
  console.log("after component 2")
  return (
    <div >
      {}
      {Component2()}

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