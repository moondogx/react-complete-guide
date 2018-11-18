import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'mix',age:28},
      {name: 'nux',age:23},
      {name: 'Puppa',age:53}
    ],
    otherState:'some value',
    showPersons:false
  }

  switchNameHandler = (newName) => {
    this.setState({ 
      persons: [
      {name: 'NOU',age:28},
      {name: newName,age:23},
      {name: 'PERA',age:53}
    ]});
  }

  nameChangedHandler = (event) =>{
console.info(event);
    this.setState({
      persons: [
      {name: 'NOU',age:28},
      {name: event.target.value,age:23},
      {name: 'PERA',age:53}
    ]
  });
  }

  copyClipboardHandler = (...args) =>{
// console.log(args);
  }

  togglePersons = () =>{
    const doesShow=this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  deletePersonHandler = (personIndex)=>{
    const persons = this.state.persons;
    persons.splice(personIndex,1);
    console.info(persons,personIndex);
    this.setState({persons: persons});
  }
  
  render() {

    const style={
      backgroundColor: 'white',
      border: '1px solid blue',
      padding: '8px',
      margin: '10px',
      cursor: 'pointer'
    } 

    let persons = null;
    if(this.state.showPersons === true){
      persons = ( 
     <div>
       {[1,<h2>ciaoo</h2>,3,4,5]}
        {this.state.persons.map((person,index) =>{
       return (
        <Person 
        click = {()=>this.deletePersonHandler(index)} 
        name = {person.name} 
        age ={person.age}
        />
       )
        })
     }
     </div>
        )
    }

    return  (
      <div className="App">
      <h1>uellas!</h1>
      <button  style={style}
      // onClick={()=> this.switchNameHandler('stokaFUNZ ')}>
      onClick={this.togglePersons}>
      Switch name</button>
      {persons}
      </div>
    );
  }
}

export default App;
