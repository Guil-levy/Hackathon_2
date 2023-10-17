const express = require('express');
const app = express();
const knex = require('knex');

//PORT SERVER
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });