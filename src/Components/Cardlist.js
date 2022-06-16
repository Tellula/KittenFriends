import React from "react";
import Card from "./Card";

//Creates a function to generate a card for each Robot
const Cardlist = ({ robots }) => {
  //use of the prop robots sent by App.j. Always in {}
if (true) {
    throw new Error('NOOOOOOOOOOOOOOOOOOOOOOOOOOOO !')
}
  return (
    <div>
      {robots.map((user, index) => {
        return (
          <Card
            key={robots[index].id} //individual key, so that each item can be identified.
            id={robots[index].id} //redundant, could use user.id instead of robots[index].id
            name={robots[index].name} //redundant, could use user.name instead of robots[index].name
            email={user.email}
          />
        );
      })}
    </div>
  );
};

export default Cardlist;
