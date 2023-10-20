function displayRandomCharacters() {
  fetch("http://localhost:3000/random-characters") 
    .then((response) => response.json())
    .then((data) => {
      const imageGallery = document.getElementById("imageGallery");
      const namesGallery = document.getElementById("namesGallery");

      data.forEach((character) => {
        const imageUrl = character.image_url;
        const name = character.name;

        // Create image
        const img = document.createElement("img");
        img.src = imageUrl;
        img.classList.add("img");

        // Create paragraph
        const nameElement = document.createElement("p");
        nameElement.textContent = name;
        nameElement.classList.add("name");

        imageGallery.appendChild(img);
        namesGallery.appendChild(nameElement);
      });
    })
    .catch((err) => console.log(err));
}

displayRandomCharacters();
