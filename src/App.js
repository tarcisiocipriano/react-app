import React, { Component } from 'react';
import classes from './App.module.css';
import Person from './Person/Person';

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

    let persons = null;
    let btnClass = '';

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

      btnClass = classes.Red;
    }

    const stateClass = [];
    if (this.state.persons.length <= 2) {
      stateClass.push(classes.red);
    }
    if (this.state.persons.length <= 1) {
      stateClass.push(classes.bold);
    }

    return (
      <div className={classes.App}>
        <h1>Hi, I'm a React App</h1>
        <p className={stateClass.join(' ')}>This is really working</p>
        <button className={btnClass} alt={this.state.showPersons} onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
  }
}

export default App;
