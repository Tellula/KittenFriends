import React, { Component } from "react";
import Cardlist from "../Components/Cardlist";
import SearchBox from "../Components/SearchBox";
import Scroll from "../Components/Scroll";
import "./App.css";

class App extends Component {
  //Smart component, it has the state inside it
  constructor() {
    super(); // Enables the use of state properties. If not super(), error Cannot set properties of undefined (setting 'state')
    this.state = {
      robots: [],
      searchfield: "",
    };
  }

  componentDidMount() {
    // triggers when the state is updated
    fetch("https://jsonplaceholder.typicode.com/users") // grab the list from a placeholder api
      .then((response) => response.json())
      .then((users) => this.setState({ robots: users })); // assign the fetched list to the state
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value }); //Modifies the state to update when input is onchange(). Defined in SearchBox.js
  };

  render() {
    const { robots, searchfield } = this.state; //enables the use of robots and searchfield after, so we do not repeat ourselves
    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });
    // if the list is not loaded for x reason, renders a loading title
    return !robots.length ? ( // replace the robots.length === 0 robots.length means false so !robots.length means true
      <h1>Loading</h1>
    ) : (
      <div className="tc">
        <h1 className="f1">Kitten friends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <Cardlist robots={filteredRobots} />
        </Scroll>
      </div>
    );
  }
}

export default App;
