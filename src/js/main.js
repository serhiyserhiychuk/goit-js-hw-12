import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import axios from 'axios';

const form = document.querySelector('.image-form');
const input = document.querySelector('.image-input');
const list = document.querySelector('.image-list');
const loader = document.querySelector('#loader-span');
const loadBtn = document.querySelector('.button');

let page = 1;

let per_page = 40;

let gallery = new SimpleLightbox('.image-list a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});

form.addEventListener('submit', submitHandler);

const api = axios.create({
  baseURL: `https://pixabay.com/api/`,
  params: {
    key: '41498783-400257af4926549016a2deb3f',
    language: 'en',
    type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  },
});

async function submitHandler(event) {
  try {
    event.preventDefault();

    list.innerHTML = '';

    page = 1;

    const q = input.value.toString();

    loader.classList.replace('is-hidden', 'loader');

    const images = await getImages({
      q,
      page,
      per_page,
    });

    if (images.totalHits === 0) {
      loader.classList.replace('loader', 'is-hidden');
      
      return iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
    }

    renderImages(images.hits);

    gallery.refresh();
    loader.classList.replace('loader', 'is-hidden');
    loadBtn.classList.replace('is-hidden', 'load-btn');
    input.value = '';

    loadBtn.addEventListener('click', loadHandler);

    async function loadHandler() {
      loader.classList.replace('is-hidden', 'loader');

      page++;

      const images = await getImages({
        q,
        page,
        per_page,
      });

      if (page >= Math.ceil(images.totalHits / per_page)) {
        loader.classList.replace('loader', 'is-hidden');
        loadBtn.classList.replace('load-btn', 'is-hidden');
        return iziToast.info({
          message:
            'We are sorry, but you have reached the end of search results.',
          position: 'topRight',
        });
      }

      renderImages(images.hits);
      gallery.refresh();
      loader.classList.replace('loader', 'is-hidden');
    }
  } catch (error) {
    console.error(error);
  }
}

async function getImages(params) {
  try {
    const responce = await api.get('', { params });
    return responce.data;
  } catch (error) {
    console.error(error);
  }
}

function renderImages(images = []) {
  const markup = images.map(
    image =>
      `<a href="${image.largeImageURL}"
            <li class="photo-card">
            <img class="photo" src="${image.webformatURL}" alt="${image.tags}">
            <div class="card-container">
            <p>Likes</p>
            <p>Views</p>
            <p>Comments</p>
            <p>Downloads</p>
            </div>
            <div class="card-container">
            <p>${image.likes}</p>
            <p>${image.views}</p>
            <p>${image.comments}</p>
            <p>${image.downloads}</p>
            </div>
            </li>
            </a>`
  );
  list.insertAdjacentHTML('beforeend', markup);
}
