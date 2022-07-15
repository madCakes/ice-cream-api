const express = require("express");
const cors = require("cors");

const data = require("./data");

//  Create an Experss app
const app = express();

// Tell the app to lsiten to JSON bodies on POST requests
app.use(express.json());

//  Add 'headers' to each response, saying that we're okayt with sharing resources with others
app.use(cors());

// Set up a route
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.get("/flavours", (req, res) => {
  let flavours = data;

  if (req.query.vegan == "true") {
    flavours = flavours.filter((f) => f["vegan"]);
  }

  res.json({
    flavours: flavours.map((f) => f["flavour"]),
  });
});

app.get("/flavours/:id", (req, res) => {
  // extract the parameter from the url
  const id = req.params.id;

  // filter the data for the ice crem with that id
  const filteredData = data.filter((f) => f["id"] == id);

  if (filteredData.length == 1) {
    res.json({
      flavour: filteredData[0],
    });

    // Checks if it can be kson. stringifies it, tell the client that it's a particular type
    // and sends it as the body
  } else {
    res.status(404).json({
      error: "No such ice cream",
    });
  }

  // send the first filtered result
  res.json({
    flavour: filteredData[0],
  });
});

app.post("/flavours", (req, res) => {
  const newFlavour = req.body;
  newFlavour["id"] = data.length + 1;
  data.push(newFlavour);

  res.status(201).json({
    success: true,
    flavour: newFlavour,
  });
});

module.exports = app;
