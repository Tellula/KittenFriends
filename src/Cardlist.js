import React from "react";
import Card from "./Card";

const Cardlist = ({ robots }) => {
  return (
    <div>
      {robots.map((user, index) => {
        return (
          <Card
            key={robots[index].id}
            id={robots[index].id}
            name={robots[index].name}
            email={user.email}
          />
        );
      })}
    </div>
  );
};

export default Cardlist;
