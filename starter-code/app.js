const express = require("express");
const app = express();

// makes everythin inside of /public available
app.use(express.static("public"));
app.set("views", __dirname + "views");

//this is our first route - home
app.get("/", (request, response, next) => {
  response.sendFile(__dirname + "/views/homepage.html");
});

//second route - about
app.get("/about", (request, response, next) => {
  response.sendFile(__dirname + "/views/about.html");
});

//third route
app.get("/gallery", (request, response, next) => {
  response.sendFile(__dirname + "/views/gallery.html");
});

//starts the backend server listening on port xxxx
app.listen(3001, () => {
  console.log("Starting the app");
});
