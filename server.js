require("dotenv").config();

const express = require("express");

const app = express();
const fruits = require("./models/fruits.js");
const vegtables = require("./models/vegtables.js");
const mongoose = require("mongoose");
const Fruit = require("./models/fruit.js");

//connect with mongo
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  //useCreateIndex: true,
});

mongoose.connection.once("open", () => {
  console.log("connected to mongoDB");
});

app.set("views", __dirname + "/views");
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

//Middelware
app.use((req, res, next) => {
  console.log("I run for all routes!");
  next();
});
//This allows the body of the post request
app.use(express.urlencoded({ extended: false }));

//routes
//index

app.get("/fruitfolder", async function (req, res) {
  const foundFruits = await Fruit.find({});
  res.render("fruitfolder/Index", {
    fruits: foundFruits,
  });
  //res.render("fruitfolder/index", {
  //fruits: fruits,
});

//put this above your Show route
app.get("/fruitfolder/new", (req, res) => {
  res.render("fruitfolder/New");
});

//Create = POST
app.post("/fruitfolder", async (req, res) => {
  console.log(req.body);
  if (req.body.readyToEat === "on") {
    req.body.readyToEat = true;
  } else {
    req.body.readyToEat = false;
  }
  //fruits.push(req.body);
  //console.log("this is the fruits array", fruits);
  //res.send("data recieved");
  const createdFruit = await Fruit.create(req.body);
  console.log(createdFruit);

  //Fruit.create(req.body, (error, createdFruit) => {
  res.redirect("/fruitfolder");
});

//show
app.get("/fruitfolder/:index", (req, res) => {
  res.render("fruitfolder/Show", {
    //second param must be an object
    fruit: fruits[req.params.index], //there will be a variable available inside the ejs file called fruit, its value is fruits[req.params.indexOfFruitsArray]
  });
});
//Middelware
app.use((req, res, next) => {
  console.log("I run for all routes!");
  next();
});
//This allows the body of the post request
app.use(express.urlencoded({ extended: false }));

app.get("/veggies", (req, res) => {
  res.render("veggies/index", {
    vegtables: vegtables,
  });
});

//put this above your Show route
app.get("/veggies/new", (req, res) => {
  res.render("veggies/New");
});

//Create = POST
app.post("/veggies", (req, res) => {
  console.log(req.body);
  if (req.body.readyToEat === "on") {
    req.body.readyToEat = true;
  } else {
    req.body.readyToEat = false;
  }
  vegtables.push(req.body);
  console.log("this is the vegtable array", vegtables);
  res.send("data recieved");
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
