import './App.css';
import React from 'react';
import Dashboard from './components/Dashboard';
import Persion from './Persion/Persion';
import Pet from './Pet/Pet';
import Banner from './components/Banner';
class App extends React.Component {
  titleChangeListener = event => {
    this.setState({ title: event.target.value })
  }
  state = {
    persons: [{ name: "mark", age: 44 },
    { name: "frank", age: 32 },
    { name: "tim", age: 23 }],
    teamMax: 10,
    title: "hello react",
    showPersons:false

  }
  toggleDisplayHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }
  changeNameHandler = (leaderName) => {
    console.log("button clicked!!!!!")
    //this.state.persons[0].name = "Captain America"
    this.setState({
      persons: [{ name: leaderName, age: 38 },
      { name: "Thor", age: 37 },
      { name: "Iron Man", age: 35 },
      { name: "Hawk", age: 50 }]
    })
  }
  render() {
    const style = {
      backgroundColor: "yellow",
      font: "inherit",
      border: "2px solid red",
      padding: "4px",
      cursor: 'pointer'
    }
    return (
      <div className="App">
        <button style={style} onClick={() => this.toggleDisplayHandler()}>Show/Hide</button>
        <h1>{this.state.title}</h1>
        <Banner clickCallback={this.titleChangeListener}></Banner>
        <button style={style} onClick={this.changeNameHandler.bind(this, "Iron Man")}>Change</button>
        
        
        {this.state.showPersons === true ?
          <div>
          <button onClick={() => this.changeNameHandler("Iron Man 3")}>Change1</button>
        <Persion clickCallback={this.changeNameHandler.bind(this, "Bat Man")} name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Pet sprcie="dog" name="doff" />
        <Persion name={this.state.persons[1].name} age={this.state.persons[1].age} />
        <Persion name={this.state.persons[2].name} age={this.state.persons[2].age} /></div>
      :null}

      </div>
      // React.createElement('div',{className:'App'},React.createElement('h1',null,'Hi')
      // ,React.createElement('h1',null,"Hi this is react programming"))
    )
  };
}

export default App;
