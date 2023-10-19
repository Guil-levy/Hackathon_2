const express = require("express");
const app = express();
const knex = require("knex");
const axios = require("axios");
const db = require("./db");

//
app.get('/db', (req, res) => {
  db.select("*")
  .from("characters")
  .then((rows) =>{
      res.json(rows);
  })
  .catch((e) =>{
   console.log(e);
  });
});
// --------------------

//PORT SERVER
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
