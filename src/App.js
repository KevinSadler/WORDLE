import React, {useState} from 'react';
import './App.css';

function App() {
  const [myHeader, setHeader] = useState("Start");
  const handleInput = event => {
    setHeader(event.target.value)
  };
  return (
    <div className="App">
      <header className="App-header"> 
      <h1>{myHeader}</h1>
      <input id='headerInput' type={'text'} onChange={handleInput}></input>
      {/* <button type='button' onClick={() => setHeader("test")}>Set Header</button> */}
      </header>
    </div>
  );
}

export default App;
