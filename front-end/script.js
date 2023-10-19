function displayImages() {
fetch("http://localhost:3000/db")
    .then((data)=>data.json())
    .then(data => {
        const imageGallery = document.getElementById('imageGallery');
        
        data.forEach(character => {
            const imageUrl = character.image_url;
            
            // Create an image element
            const img = document.createElement('img');
            img.src = imageUrl;
            
            // Append the image element 
            imageGallery.appendChild(img);
        });
    })
    .catch((err)=>console.log(err))
;
}
displayImages();