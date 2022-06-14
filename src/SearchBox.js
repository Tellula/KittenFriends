import React from "react";

const SearchBox = ({searchfield, searchChange}) => {
  return (
    <div className="pa2">
      <input
        className="pa 3 ba b--pink bg lightest-green"
        type="search"
        placeholder="search kittens"
        onChange={searchChange}// tells the parent to run the searchChange function, each time the input is mofified by the user
      />
    </div>
  );
};

export default SearchBox;
