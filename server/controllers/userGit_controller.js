//const db = require("../models/db_seed/db_init");
const Users = require("../models/Users");
const axios = require("axios");

exports.searchUser = (req, res) => {
  Users.findAll({
    where: {
      login: req.body.username,
    },
  })
    .then((data) => {
      if (data.length == 0) {
        console.log("User not found in BDD, searching on github API ... :");
        axios
          .get("https://api.github.com/users/" + req.body.username + "")
          .then(function (response) {
            console.log("Data fetched for : " + req.body.username);
            Users.create(response.data).then((data) => {
              console.log("Data saved in DB");
              res.send(data);
            });
          })
          .catch(function (error) {
            console.log("ERROR catch ! : " + error);
            res.send(error);
          });
      } else {
        console.log("Data found in DB !");
        res.send(data);
      }
    })
    .catch(function (err) {
      console.error(err);
    });
};

exports.usersList = (req, res) => {
  Users.findAll().then((data) => {
    if (data.length == 0) {
      console.log("User not found in BDD, searching on github API ... :");
      axios
        .get("https://api.github.com/users/" + req.body.username + "")
        .then(function (response) {
          console.log("Data fetched for : " + req.body.username);
          Users.create(response.data).then((data) => {
            console.log("Data saved in DB");
            res.send(data);
          });
        })
        .catch(function (error) {
          console.log("ERROR catch ! : " + error);
          res.send(error);
        });
    } else {
      res.send(data);
    }
  });
};

exports.user = (req, res) => {
  console.log(req.params.username);
  Users.findAll({
    where: {
      login: req.params.username,
    },
  }).then((data) => {
    res.send(data);
  });
};
