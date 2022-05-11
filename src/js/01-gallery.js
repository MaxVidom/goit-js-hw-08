import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
const galeryUlRef = document.querySelector('div.gallery');

function createGalery(items) {
    const galeryMarkup = items.map(({ preview, original, description }) => {
        return `<a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" title="${description}"/>
                </a>`;
        }).join("");
    galeryUlRef.insertAdjacentHTML("afterbegin", galeryMarkup);
}

createGalery(galleryItems);

let gallery = new SimpleLightbox('div.gallery a');
gallery.on('show.simplelightbox', function () {
    gallery.defaultOptions.captionDelay = 250;
});
