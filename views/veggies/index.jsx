import React from "react";
const Default = require('../layout/Default')

function index({ vegtables }) {
  return (
    
    <Default>
      <nav>
        <a href="/veggies/new">Create New vegtable</a>
      </nav>
      <ul>

      {vegtables.map((vegtable, i) => {
        return (
          <li key={i}>
            {" "}
            <a href={`/veggies/${vegtable.id}`}> {vegtable.name} </a>
            is {vegtable.color} <br />
            {vegtable.readyToEat
              ? "it is ready to eat "
              : "it is not ready to eat"}
              <form method='POST' action={`/veggies/${vegtable._id}?_method=DELETE`}  value="DELETE" >
                <input type='submit' value="DELETE" />
              </form>
              <a href={`/veggies/${vegtable._id}/edit`} >Edit this vegtable </a>
          </li>
        );
      })}
      </ul>
      
    </Default>
  );
}
module.exports = index;
