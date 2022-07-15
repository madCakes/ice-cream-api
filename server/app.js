const express = require("express");

//  Create an Experss app
const app = express();

// Set up a route
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

module.exports = app;
