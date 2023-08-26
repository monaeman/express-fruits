require("dotenv").config();

const express = require("express");

const app = express();
const fruits = require("./models/fruits.js");
const vegtables = require("./models/vegtables.js");
const mongoose = require("mongoose");
const Fruit = require("./models/fruit.js");
const Vegtable = require("./models/vegtable.js");
const methodOverride = require('method-override');

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

//after app has been defined
//use methodOverride.  We'll be adding a query parameter to our delete form named _method
//Lets you use HTTP verbs such as PUT or DELETE in places where the client doesn't support it.
app.use(methodOverride('_method'));

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
app.get("/fruitfolder/:id", async (req, res) => {
  const oneFruit = await Fruit.findById(req.params.id);
  res.render("fruitfolder/Show", {
    fruit: oneFruit,
    //second param must be an object
    //fruit: fruits[req.params.index], //there will be a variable available inside the ejs file called fruit, its value is fruits[req.params.indexOfFruitsArray]
  });
});
//Edit
app.get('/fruitfolder/:id/edit', async(req, res)=>{
  const foundFruit = await Fruit.findById(req.params.id)
  res.render('fruitfolder/Edit', {
    fruit: foundFruit
  })
})

//update
app.put('/fruitfolder/:id', async(req, res)=> {
  //verify if checkbox is clicked
 req.body.readyToEat === "on" ? req.body.readyToEat =true : req.body.readyToEat = false
 req.body.isItGood === "on" ? req.body.isItGood =true : req.body.isItGood = false

  //find the fruit and update by id
  await Fruit.findByIdAndUpdate(req.params.id, req.body)
  res.redirect(`/fruitfolder/${req.params.id}`)
})

//delete
app.delete('/fruitfolder/:id', async(req, res)=> {
  await Fruit.findByIdAndRemove(req.params.id)
  res.redirect('/fruitfolder')
})

//Vegtable routes

//Middelware
app.use((req, res, next) => {
  console.log("I run for all routes!");
  next();
});
//This allows the body of the post request
app.use(express.urlencoded({ extended: false }));

app.get("/veggies", async function (req, res) {
  const foundVegtables = await Vegtable.find({});
  res.render("veggies/index", {
    vegtables: foundVegtables,
  });
});

//put this above your Show route
app.get("/veggies/new", (req, res) => {
  res.render("veggies/New");
});

//Create = POST
app.post("/veggies", async (req, res) => {
  console.log(req.body);
  if (req.body.readyToEat === "on") {
    req.body.readyToEat = true;
  } else {
    req.body.readyToEat = false;
  }

  
  const createdVegtable = await Vegtable.create(req.body);
  console.log(createdVegtable);
  res.redirect("/veggies");
  // vegtables.push(req.body);
  // console.log("this is the vegtable array", vegtables);
  // res.send("data recieved");
});

//show
app.get("/veggies/:id", async (req, res) => {
  const oneVegtable = await Vegtable.findById(req.params.id);
  res.render("veggies/Show", {
    vegtable: oneVegtable,
    //second param must be an object
    // vegtable: vegtables[req.params.index], //there will be a variable available inside the ejs file called fruit, its value is fruits[req.params.indexOfFruitsArray]
  });
});

//Edit
app.get('/veggies/:id/edit', async(req, res)=>{
  const foundVegtable = await Vegtable.findById(req.params.id)
  res.render('veggies/Edit', {
    vegtable: foundVegtable
  })
})

//update
app.put('/veggies/:id', async(req, res)=> {
  //verify if checkbox is clicked
 req.body.readyToEat === "on" ? req.body.readyToEat =true : req.body.readyToEat = false
 req.body.isItGood === "on" ? req.body.isItGood =true : req.body.isItGood = false

  //find the vegtable and update by id
  await Vegtable.findByIdAndUpdate(req.params.id, req.body)
  res.redirect(`/veggies/${req.params.id}`)
})

//delete
app.delete('/veggies/:id', async(req, res)=> {
  await Vegtable.findByIdAndRemove(req.params.id)
  res.redirect('/veggies')
})



app.listen(5005, () => {
  console.log("listening");
});
