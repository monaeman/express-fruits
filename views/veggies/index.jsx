import React from "react";

function index({ vegtables }) {
  return (
    <div>
      <nav>
        <a href="/veggies/new">Create New vegtable</a>
      </nav>
      {vegtables.map((vegtable, i) => {
        return (
          <li key={i}>
            {" "}
            <a href={`/veggies/${vegtable.id}`}> {vegtable.name} </a>
            is {vegtable.color} <br />
            {vegtable.readyToEat
              ? "it is ready to eat "
              : "it is not ready to eat"}
          </li>
        );
      })}
    </div>
  );
}
module.exports = index;
