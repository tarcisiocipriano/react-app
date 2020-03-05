import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { id: 'p1', name: 'Tarcísio' },
      { id: 'p2', name: 'Clara' },
      { id: 'p3', name: 'Coronga' }
    ],
    showPersons: false
  }

  togglePersonsHandler = () => {
    const currentState = this.state.showPersons;
    this.setState({ showPersons: !currentState });
  }

  personChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => p.id === id);

    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  }

  removePersonHander = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  render() {
    const btnStyle = {
      backgroundColor: '#282c40',
      padding: '8px 16px',
      border: '1px solid white',
      borderRadius: '4px',
      color: 'white',
      font: 'inherit',
      outline: 'none',
      cursor: 'pointer'
    }

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              key={person.id}
              name={person.name}
              click={this.removePersonHander.bind(this, index)}
              changed={(event) => this.personChangedHandler(event, person.id)} />
          })}
        </div>
      );
      btnStyle.color = 'red';
      btnStyle.borderColor = 'red';
    }

    const stateClass = [];
    if (this.state.persons.length <= 2) {
      stateClass.push('red');
    }
    if (this.state.persons.length <= 1) {
      stateClass.push('bold');
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={stateClass.join(' ')}>This is really working</p>
        <button onClick={this.togglePersonsHandler} style={btnStyle}>Toggle Persons</button>
        {persons}
      </div>
    );
  }
}

export default App;
