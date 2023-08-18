const express = require("express");

const app = express();
const fruits = require("./models/fruits.js");

app.set("views", __dirname + "/views");
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

app.get("/fruits", (req, res) => {
  res.render("index", {
    fruits: fruits,
  });
});

//show
app.get("/fruits/:index", (req, res) => {
  res.render("Show", {
    //second param must be an object
    fruit: fruits[req.params.index], //there will be a variable available inside the ejs file called fruit, its value is fruits[req.params.indexOfFruitsArray]
  });
});
app.listen(5005, () => {
  console.log("listening");
});
