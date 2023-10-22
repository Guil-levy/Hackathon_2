const express = require("express");
const app = express();
const knex = require("knex");
const axios = require("axios");
const db = require("./db");
const cors = require("cors");
app.use(express.json());
app.use(cors());

app.get("/random-characters", (req, res) => {
  db.select("*")
    .from("characters")
    .orderByRaw("random()")
    .limit(3)
    .then((randomCharacters) => {
      res.json(randomCharacters);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    });
});

// Post user info into NEW DB
app.post("/save-character-selection", (req, res) => {
  const selectedCharacter = req.body.selectedCharacter;

  db("selected_characters")
    .insert({ voted_characters: selectedCharacter })
    .then(() => {
      res.status(200).send("Character selection saved.");
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("Error saving character selection.");
    });
});
// --------------------------
// AGGREGATE the results in a new endpoint
// app.get("/character-vote-counts", (req, res) => {
//   db("selected_characters")
// .select("voted_characters")
//     .count('* as vote_count')
//     .groupBy("voted_characters")
//     .then((voteCounts) => {
//       res.json(voteCounts);
//     })
//     .catch((error) => {
//       console.error(error);
//       res.status(500).json({ error: "Internal server error" });
//     });
// });
app.get("/character-vote-counts", (req, res) => {
  db("characters")
    // .select("voted_characters")
    // .count('* as vote_count')
    .select("characters.name as character_name")
    .count("selected_characters.voted_characters as vote_count")
    .leftJoin(
      "selected_characters",
      "characters.name",
      "selected_characters.voted_characters"
    )
    .groupBy("characters.name")
    .then((voteCounts) => {
      res.json(voteCounts);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    });
});
//PORT SERVER
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
