const express = require("express");
const app = express();
const knex = require("knex");
const axios = require("axios");
const db = require("./db");

//
app.get('/db', (req, res) => {
  // Handle the route logic here
});
// --------------------

//PORT SERVER
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
