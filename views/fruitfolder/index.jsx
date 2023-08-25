import React from "react";
const Default = require('../layout/Default')

function index({ fruits }) {
  return (
    <Default title={"Fruits Index Page"}>
      <nav>
        <a href="/fruitfolder/new">Create New Fruit</a>
      </nav>
      <ul>
      {fruits.map((fruit, i) => {
        return (
          <li key={i}>
            {" "}
            <a href={`/fruitfolder/${fruit.id}`}> {fruit.name} </a>
            is {fruit.color} <br />
            {fruit.readyToEat
              ? "it is ready to eat "
              : "it is not ready to eat"}
              <form method='POST' action={`/fruitfolder/${fruit._id}?_method=DELETE`}  value="DELETE" >
                <input type='submit' value="DELETE" />
              </form>
              <a href={`/fruitfolder/${fruit._id}/edit`} >Edit this Fruit </a>
          </li>
        );
      })}
      </ul>
      
    </Default>
  );
}

module.exports = index;
