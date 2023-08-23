import React from "react";

function index({ fruits }) {
  return (
    <div>
      <nav>
        <a href="/fruitfolder/new">Create New Fruit</a>
      </nav>
      {fruits.map((fruit, i) => {
        return (
          <li key={i}>
            {" "}
            <a href={`/fruitfolder/${fruit.id}`}> {fruit.name} </a>
            is {fruit.color} <br />
            {fruit.readyToEat
              ? "it is ready to eat "
              : "it is not ready to eat"}
          </li>
        );
      })}
    </div>
  );
}

module.exports = index;
