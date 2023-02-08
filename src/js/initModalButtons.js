// import * as rerenderLibrary from './my-library';
// const loadLib = require('./my-library');

const load = key => {
  try {
    const serializedState = localStorage.getItem(key);

    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (err) {
    console.error('Get state error: ', err);
  }
};

const save = (key, value) => {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (err) {
    console.error('Set state error: ', err);
  }
};

export const initStorageButton = data => {
  const refsS = {
    buttonWatched: document.querySelector('.modal-watched-btn'),
    buttonQueue: document.querySelector('.modal-queue-btn'),
  };

  if (load('watched') !== undefined && load('watched').includes(data)) {
    refsS.buttonWatched.textContent = 'Add to watched';
  }
  if (load('queue') !== undefined && load('queue').includes(data)) {
    refsS.buttonQueue.textContent = 'Add to queue';
  }

  const addStorageMovie = (key, value) => {
    let dataFromLocalStorage = load(key);
    if (dataFromLocalStorage === undefined) {
      dataFromLocalStorage = [];
    }
    dataFromLocalStorage.push(value);
    save(key, dataFromLocalStorage);
  };

  const changeButtonStatus = (status, button) => {
    let value = load(status);
    if (value === undefined) {
      value = [];
    }
    if (value.find(el => el.id === data.id) !== undefined) {
      if (document.URL === 'http://localhost:1234/index.html#') {
        button.textContent = 'Added';
        button.setAttribute('disabled', true);
      } else {
        button.textContent = `Remove from ${status}`;
      }
    }
  };

  changeButtonStatus('watched', refsS.buttonWatched);
  changeButtonStatus('queue', refsS.buttonQueue);

  const buttonStatusChange = (status, button, vol) => {
    let dataArr = load(status);
    if (dataArr === undefined) {
      dataArr = [];
    }
    if (dataArr.find(el => el.id === vol.id) !== undefined) {
      let objIndex = dataArr.findIndex(el => el.id === vol.id);
      dataArr.splice(objIndex, 1);
      localStorage.removeItem(status);
      save(status, dataArr);
      button.textContent = `Add to ${status}`;
      if (document.URL === 'http://localhost:1234/my_library.html#') {
        // loadLib.loadWatchedFilms();
      }
    } else {
      if (
        document.URL === 'http://localhost:1234/index.html#'
        // 'https://bogdan2120.github.io/project-6-filmoteka/my_library.html#'
      ) {
        addStorageMovie(status, vol);
        button.textContent = 'Added';
        button.setAttribute('disabled', true);
      } else {
        addStorageMovie(status, vol);
        button.textContent = `Remove from ${status}`;
      }
    }
  };

  const bscWatched = () =>
    buttonStatusChange('watched', refsS.buttonWatched, data);

  const bscQueue = () => buttonStatusChange('queue', refsS.buttonQueue, data);

  refsS.buttonWatched.addEventListener('click', bscWatched);
  refsS.buttonQueue.addEventListener('click', bscQueue);
};