import './App.css';
import React from 'react';
import Dashboard from './components/Dashboard';
import Persion from './Persion/Persion';
function App() {
  return (
    <div className="App">
      <Dashboard/>
      <Persion/>
      <Dashboard/>
      <Persion/>
    </div>
    // React.createElement('div',{className:'App'},React.createElement('h1',null,'Hi')
    // ,React.createElement('h1',null,"Hi this is react programming"))

  );
}

export default App;
