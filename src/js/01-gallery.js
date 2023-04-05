// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

// Opisany w dokumentacji
import SimpleLightbox from 'simplelightbox';
// Dodatkowy import stylów
import 'simplelightbox/dist/simple-lightbox.min.css';

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');

// for (const item of galleryItems) {}

galleryItems.forEach(item => {
  const imageItem = document.createElement('li');
  galleryEl.append(imageItem);

  imageItem.insertAdjacentHTML(
    'beforeend',
    `<a class="gallery__link" href="${item.original}">
  <img
  class="gallery__image"
  src="${item.preview}"
  data-source="${item.original}"
  alt="${item.description}"
/>
</a>`
  );
});
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 200,
});

// galleryEl.innerHTML = "";

// galleryEl.innerHTML += newImage;
