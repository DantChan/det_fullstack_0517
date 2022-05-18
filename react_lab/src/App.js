import './App.css';
import React from 'react';
import Dashboard from './components/Dashboard';
import Persion from './Persion/Persion';
function App() {
  return (
    <div className="App">
      <Persion age="45" name="adt"/>
      <Persion age="42" name="dee"/>
      <Persion name="dee">Team Leader</Persion>

    </div>
    // React.createElement('div',{className:'App'},React.createElement('h1',null,'Hi')
    // ,React.createElement('h1',null,"Hi this is react programming"))

  );
}

export default App;
