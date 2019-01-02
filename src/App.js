import React, { Component } from "react";
import "./App.scss";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      {
        id: "adadada",
        name: "Max",
        age: 22
      },
      {
        id: "fbfcb",
        name: "Kamil",
        age: 21
      },
      {
        id: "fgfgf",
        name: "Sramil",
        age: 23
      }
    ],
    showPersons: false
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];

    persons[personIndex] = person;
    this.setState({
      persons: persons
    });
  };

  deletePersonHandler = personIndex => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  // switchNameHandler() {
  //   console.log('abc');
  // }

  render() {
    const style = {
      backgroundColor: "green",
      color: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
      ":hover": {
        backgroundColor: "lightgreen",
        color: "black"
      }
    };

    let persons = null;

    if (this.state.showPersons) {
      style.backgroundColor = "red";
      style[":hover"] = {
        backgroundColor: "salmon",
        color: "black"
      };

      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                name={person.name}
                age={person.age}
                click={this.deletePersonHandler.bind(this, index)}
                key={person.id}
                changed={event => this.nameChangedHandler(event, person.id)}
              />
            );
          })}
        </div>
      );
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push("red");
    }
    if (this.state.persons.length <= 1) {
      classes.push("bold");
    }

    return <div className="App">
      <p className={classes.join(" ")}>This is really working</p>
      <button style={style} onClick={this.togglePersonsHandler}>
        Toggle Persons
      </button>
      {persons}
    </div>;
  }
}

export default App;
