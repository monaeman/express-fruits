const express = require("express");

const app = express();
const fruits = require("./models/fruits.js");
const vegtables = require("./models/vegtables.js");

app.set("views", __dirname + "/views");
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

app.get("/fruitfolder", (req, res) => {
  res.render("fruitfolder/index", {
    fruits: fruits,
  });
});

//show
app.get("/fruitfolder/:index", (req, res) => {
  res.render("fruitfolder/Show", {
    //second param must be an object
    fruit: fruits[req.params.index], //there will be a variable available inside the ejs file called fruit, its value is fruits[req.params.indexOfFruitsArray]
  });
});

app.get("/veggies", (req, res) => {
  res.render("veggies/index", {
    vegtables: vegtables,
  });
});

//show
app.get("/veggies/:index", (req, res) => {
  res.render("veggies/Show", {
    //second param must be an object
    vegtable: vegtables[req.params.index], //there will be a variable available inside the ejs file called fruit, its value is fruits[req.params.indexOfFruitsArray]
  });
});

app.listen(5005, () => {
  console.log("listening");
});
