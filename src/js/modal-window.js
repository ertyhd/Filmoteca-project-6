const basicLightbox = require('basiclightbox');

import 'basiclightbox/dist/basicLightbox.min.css';
import modal from '../templates/modal.hbs';
import { initStorageButton } from './initModalButtons';
import NewApiFetches from './apiFetches';
import Notiflix from 'notiflix';

import SVG from '../images/symbol-arial.svg';

const newApiFetches = new NewApiFetches();

const filmModal = document.querySelector('body');
const loading = document.querySelector('.spinner-box');

filmModal.addEventListener('click', selectFilmSlider);

// const refresh = () => {
//   location.reload();
// };

const refs = {
  buttonWatched: document.querySelector('.modal-watched-btn'),
  buttonQueue: document.querySelector('.modal-queue-btn'),
};

function selectFilmSlider(event) {
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  renfetch(event.target.dataset.action);
}

const renfetch = id => {
  loading.classList.remove('is-hidden');
  newApiFetches
    .fetchDetailsMovie(id)
    .then(data => {
      const instance = basicLightbox.create(modal(data, SVG));
      instance.show();
      initStorageButton(data);
      const closeBtnCard = instance
        .element()
        .querySelector('.modal-card-film-close-btn');
      closeBtnCard.addEventListener('click', instance.close);
      window.addEventListener('keydown', handleKeyPress);

      function handleKeyPress({ code }) {
        if (code === 'Escape' && instance.visible()) {
          instance.close();
        }
      }

      //====
    })
    .catch(error => {
      Notiflix.Notify.failure('Sorry! There are no movie information found');
      console.log(error);
    })
    .finally(() => {
      loading.classList.add('is-hidden');
    });
};
