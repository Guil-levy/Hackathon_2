function displayRandomCharacters() {
    fetch("http://localhost:3000/random-characters")
      .then((response) => response.json())
      .then((data) => {
        const characterGallery = document.getElementById("characterGallery");
  
        data.forEach((character) => {
          const imageUrl = character.image_url;
          const name = character.name;
  
          // Create a character container
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
  
          // Create a radio button for voting
          const radio = document.createElement("input");
          radio.type = "radio";
          radio.name = "character-vote";
          radio.classList.add("character-radio");
          radio.value = character.id;
  
          // Appends
          characterContainer.appendChild(img);
          characterContainer.appendChild(nameElement);
  
          characterGallery.appendChild(characterContainer);
  
          characterContainer.appendChild(radio);
        });
      })
      .catch((err) => console.log(err));
  }
  
  displayRandomCharacters();
  
  // ------------------
  //ADD even listener/ POST method
  
  document.getElementById("nextPageButton").addEventListener("click", (event) => {
    event.preventDefault();
    console.log("Button clicked");
    const selectedCharacter = document.querySelector(
      'input[name="character-vote"]:checked'
    ).value;
    if (selectedCharacter) {
      console.log("Selected character:", selectedCharacter);
      fetch("http://localhost:3000/save-character-selection", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ selectedCharacter }),
      })
        .then((response) => {
          console.log("Response received");
          if (response.status === 200) {
           
            // Redirect to the next page (survey2.html)
            window.location.href = "result.html";
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

  
  