import React from "react";

function Show({ vegtable }) {
  console.log(vegtable);
  return (
    <div>
      <h1>
        {vegtable.name} is {vegtable.color}
      </h1>
      {vegtable.readyToEat ? " it's ready to eat" : "Ew yuck!"}
      <br/>
      {
        vegtable.isItGood ? `Yes I like ${vegtable.name}` : `No i don't like ${vegtable.name}`
      }
    </div>
  );
}

module.exports = Show;
