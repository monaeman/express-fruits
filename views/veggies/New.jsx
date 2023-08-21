import React from "react";

function New() {
  return (
    <div>
      <h1>New vegtable page</h1>
      {/* NOTE: action will be the route, method will be the HTTP verb */}

      <form action="/veggies" method="POST">
        Name <input type="text" name="name" />
        <br />
        Color: <input type="text" name="color" />
        <br />
        Ready To Eat: <input type="checkbox" name="readyToEat" />
        <br />
        <input type="submit" name="" value="Create Vegtable" />
      </form>
    </div>
  );
}
module.exports = New;
