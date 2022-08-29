import React, { useState, useEffect } from "react";
import Cardlist from "../Components/Cardlist";
import SearchBox from "../Components/SearchBox";
import Scroll from "../Components/Scroll";
import ErrorBoundary from "../Components/ErrorBoundary";
import "./App.css";

function App() {
  const [robots, setRobots] = useState([]);
  const [searchfield, setSearchfield] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users") // grab the list from a placeholder api
      .then((response) => response.json())
      .then((users) => setRobots(users)); // assign the fetched list to the state with useState hooks
      console.log(count)
  }, [count]);

  const onSearchChange = (event) => {
    setSearchfield(event.target.value); //Modifies the state to update with user input
  };

  const filteredRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchfield.toLowerCase());
  });

  // if the list is not loaded for x reason, renders a loading title
  return !robots.length ? ( // replace the robots.length === 0 robots.length means false so !robots.length means true
    <h1>Loading</h1>
  ) : (
    <div className="tc">
      <h1 className="f1">Kitten friends</h1>
      <button onClick={() => setCount(count + 1)}>Click me !</button>
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        <ErrorBoundary>
          <Cardlist robots={filteredRobots} />
        </ErrorBoundary>
      </Scroll>
    </div>
  );
}

export default App;
