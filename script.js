/* const gallery = document.querySelector(".gallery");

const apiUrl = "https://picsum.photos/v2/list";

function fetchImages() {
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      data.forEach((image) => {
        console.log(image);
        const galleryItem = document.createElement("div");
        galleryItem.classList.add("gallery-item");
        const img = document.createElement("img");
        img.src = image.download_url;
        galleryItem.appendChild(img);
        const h3 = document.createElement("h3");
        h3.textContent = image.author;
        galleryItem.appendChild(h3);
        gallery.appendChild(galleryItem);
      });
    });
}

fetchImages();
 */

const gallery = document.querySelector(".gallery");

const apiUrl = "https://picsum.photos/v2/list";

async function fetchImages() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    data.forEach((image) => {
      console.log(image);
      const galleryItem = document.createElement("div");
      galleryItem.classList.add("gallery-item");

      const img = document.createElement("img");
      img.src = image.download_url;
      galleryItem.appendChild(img);

      const h3 = document.createElement("h3");
      h3.textContent = image.author;
      galleryItem.appendChild(h3);

      gallery.appendChild(galleryItem);
    });
  } catch (error) {
    console.error("Error fetching images:", error);
  }
}

fetchImages();
