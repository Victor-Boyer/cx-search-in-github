const knex = require("knex");
const fs = require("fs");
const { error } = require("console");
const db = knex({
  client: "pg",
  connection: {
    host: "127.0.0.1",
    user: "root",
    password: "root",
    database: "github",
    useNullAsDefault: true,
  },
});

const gitData = JSON.parse(
  fs.readFileSync("seed.json", "utf8", (err, file) => {
    if (err) throw "Error: can't read seed file : " + err;
  })
);

console.log(Object.keys(gitData)[30]);

db.schema.hasTable("users_data").then(function (exists) {
  if (!exists) {
    db.schema.createTable("users_data", function (t) {
      t.increments("id_user").primary(); // integer id
      for (let i = 0; i < Object.keys(gitData).length; i++) {
        console.log(Object.keys(gitData)[i]);
        t.string(Object.keys(gitData)[i]);
      }
    }).then(() => {
      console.log('Table created.');
    })
  }
});
