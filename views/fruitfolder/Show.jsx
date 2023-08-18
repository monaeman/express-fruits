import React from "react";

function Show({ fruit }) {
  console.log(fruit);
  return (
    <div>
      <h1>
        {fruit.name} is {fruit.color}
      </h1>
      {fruit.readyToEat ? " it's ready to eat" : "Ew yuck!"}
    </div>
  );
}

module.exports = Show;
