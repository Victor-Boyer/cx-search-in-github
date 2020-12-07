const knex = require("knex")({
  client: "pg",
  connection: {
    host: "127.0.0.1",
    user: "root",
    password: "root",
    database: "github",
    useNullAsDefault: true,
  },
});



/* const PokemonEntity  = class {
    constructor () {}
    
    selectPokemon() {
        db.select('nomfr', 'id').from('pokemon_entity').limit(10)
        .then((data) => {
            console.log(data);
        })
    }

     getPokemon() {
        this.selectPokemon(function(data){
            return data
        });
      }
} */

module.exports = knex;