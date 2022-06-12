import React from "react";

const SearchBox = ({searchfield, searchChange}) => {
  return (
    <div className="pa2">
      <input
        className="pa 3 ba b--pink bg lightest-green"
        type="search"
        placeholder="search robots"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
