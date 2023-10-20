function displayImages() {
  fetch("http://localhost:3000/db")
    .then((data) => data.json())
    .then((data) => {
      const imageGallery = document.getElementById("imageGallery");

      data.forEach((character) => {
        const imageUrl = character.image_url;

        // Create an image element
        const img = document.createElement("img");
        img.src = imageUrl;
        img.classList.add("img");

        // Append the image element
        imageGallery.appendChild(img);
      });
    })
    .catch((err) => console.log(err));
}
displayImages();

<<<<<<< HEAD
function displayNames() {
  fetch("http://localhost:3000/db")
    .then((data) => data.json())
    .then((data) => {
      const namesGallery = document.getElementById("namesGallery");

      data.forEach((character) => {
        const name = character.name;

        // Create a paragraph element for the name
        const nameElement = document.createElement("p");
        nameElement.textContent = name;
        nameElement.classList.add("name");

        // Append the name element to the namesGallery div
        namesGallery.appendChild(nameElement);
      });
    })
    .catch((err) => console.log(err));
}

displayNames();
=======



function myFunction() {
  document.getElementById("demo").innerHTML = "Hello, wellcome to our Starwars survey.";
}
>>>>>>> 5d6c6b3ae05c9dc787ff9f1a1d864542ecdb9a55
