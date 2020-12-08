const bodyParser = require("body-parser");

/* --------------[ INCLUDE ROUTER ]----------------- */
const userGit = require("./routes/userGit_route");

const express = require("express");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static("public"));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  next();
});
/* -[ HOME ROUTER ]- */

app.get("/home", userGit);
app.get("/users/:username", userGit);

app.post("/users", userGit);

module.exports = app;
