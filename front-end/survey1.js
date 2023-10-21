function displayRandomCharacters() {
  fetch("http://localhost:3000/random-characters")
    .then((response) => response.json())
    .then((data) => {
      const characterContainer = document.getElementById("character-container");

      data.forEach((character) => {
        const imageUrl = character.image_url;
        const name = character.name;

        // Create character container
        const characterContainer = document.createElement("div");
        characterContainer.classList.add("character-container");

        // Create image
        const img = document.createElement("img");
        img.src = imageUrl;
        img.classList.add("img");

        // Create a paragraph for the name
        const nameElement = document.createElement("p");
        nameElement.textContent = name;
        nameElement.classList.add("name");

        // Create a checkbox for voting
        const checkbox = document.createElement("input");
        checkbox.type = "radio"; // Use radio buttons for selecting one option
        checkbox.name = "character-vote"; // Give the same name to group the radio buttons
        checkbox.classList.add("character-checkbox");
        checkbox.value = character.id;

        // Append the image, name, and checkbox elements to the character container
        characterContainer.appendChild(img);
        characterContainer.appendChild(nameElement);
        characterContainer.appendChild(checkbox);

        // Append the character container to the main container
        imageGallery.appendChild(characterContainer);
      });
    })
    .catch((err) => console.log(err));
}

displayRandomCharacters();

// ------------------
//ADD even listener/ POST method
document.getElementById("nextPageButton").addEventListener("click", () => {
  document.querySelector('input[name="character-vote"]:checked').value
  if (selectedCharacter) {
    fetch("http://localhost:3000/save-character-selection", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ selectedCharacter }),
    })
      .then((response) => {
        if (response.status === 200) {
          // Provide feedback to the user that their selection has been saved
          alert("Character selection saved!");
          // Redirect to the next page (survey2.html)
          window.location.href = "survey2.html";
        } else {
          alert("Failed to save character selection.");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  } else {
    alert("Please select a character before proceeding.");
  }
});

