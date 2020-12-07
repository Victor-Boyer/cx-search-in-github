const db = require("../models/github_user");
const axios = require("axios");
const { select, from } = require("../models/github_user");

exports.searchUser = (req, res) => {
  db.select("login")
    .from("users_data")
    .where({ login: req.body.username })
    .then((data) => { 
      if (data.length == 0) {
        console.log("User not found in BDD, searching on github API ... :");
        axios
          .get("https://api.github.com/users/" + req.body.username + "")
          .then(function (response) {
            console.log("Data fetched for : " + req.body.username);
            db.insert(response.data)
              .returning("*")
              .into("users_data")
              .then((data) => {
                console.log('Data saved in DB');
                res.send(data);
              });
          })
          .catch(function (error) {
            console.log("ERROR catch ! : " + error);
            res.send(error)
          });
      } else {
        console.log('Data found in DB, sending information ...');
        db.select("*")
        .from("users_data")
        .where({ login: req.body.username })
        .then((data) => {
          console.log('Data sended !');
          res.send(data)
        })
      }

    })
    .catch(function (err) {
      console.error(err);
    });
};

exports.usersList = (req, res) => {
  db.select("*")
  .from("users_data")
  .then((data) => {
    res.send(data)
  })
}

/* exports.insert = (req, res) => {
  console.log(req.body);
  db.insert(req.body)
    .returning("*")
    .into("pokemon_entity")
    .then((data) => {
      res.send(data);
    });
}; */

/* exports.onePokemon = (req, res) => {
  console.log(req.params.id);
  db("pokemon_entity")
    .where({ id: req.params.id })
    .first()
    .then((data) => {
      res.send(data);
    });
};

exports.attackPokemon = (req, res) => {
  db("pokemon_attack")
  .where({ id_pokemon: req.params.id })
  .first()
  .then((data) => {
    res.send(data);
  });
} */