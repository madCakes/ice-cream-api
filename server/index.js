// Import the app
const { request } = require("./app");
const app = require("./app");

// Start the server
const port = 3000;

app.listen(port, () => {
  console.log(`Listening on PORT:${port}`);
});
