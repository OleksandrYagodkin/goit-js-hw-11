import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  gallery,
} from './js/render-functions.js';

const iconPath = new URL('./img/icon-error.svg', import.meta.url).href;

const form = document.querySelector('.form');
console.dir(form);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  enableKeyboard: true,
});

hideLoader();

form.addEventListener('submit', handleSearch);

function handleSearch(event) {
  event.preventDefault();

  const query = form.elements['search-text'].value.trim();

  if (!query) return;

  clearGallery();
  showLoader();

  getImagesByQuery(query)
    .then(({ hits }) => {
      if (hits.length === 0) {
        iziToast.info({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          backgroundColor: ' #ef4040',
          maxWidth: '434',
          messageColor: ' #fafafb',
          iconColor: ' #fafafb',
          iconUrl: iconPath,
        });
        return;
      }
      gallery.innerHTML = createGallery(hits);
      lightbox.refresh();
    })
    .catch(() => {
      iziToast.info({
        message: 'Something went wrong!',
        backgroundColor: ' #ef4040',
        maxWidth: '434',
        messageColor: ' #fafafb',
        iconColor: ' #fafafb',
        iconUrl: iconPath,
      });
    })
    .finally(() => {
      hideLoader();
    });
  form.reset();
}
