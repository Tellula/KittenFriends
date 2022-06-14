import React, { Component } from "react";
import Cardlist from "./Cardlist";
import SearchBox from "./SearchBox";
import Scroll from "./Scroll";
import './App.css';

class App extends Component { //Smart component, it has the state inside it
  constructor() {
    super();// Enables the use of state properties. If not super(), error Cannot set properties of undefined (setting 'state')
    this.state = {
      robots: [],
      searchfield: "",
    };
  }

  componentDidMount() {// triggers when the state is updated
    fetch('https://jsonplaceholder.typicode.com/users')// grab the list from a placeholder api
    .then(response=>response.json())
    .then(users=>this.setState({robots: users}));// assign the fetched list to the state
  }


  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });//Modifies the state to update when input is onchange(). Defined in SearchBox.js
  };

  render() {
    const filteredRobots = this.state.robots.filter((robot) => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });
    if (this.state.robots.length === 0)  { // if the list is not loaded for x reason, renders a loading title
    return <h1>Loading</h1>
    } else {
      return (
        <div className="tc">
          <h1 className="f1">Kitten friends</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <Cardlist robots={filteredRobots} />
        </div>
      );
    }

  }
}



export default App;
