import { poemsList } from './poemsList.js';
import { dateButtonConversion, dateWindowConversion } from './utils/dates.js';

export function renderPoemsPage() {
  let poemGridHTML = '';
  let poemWindowsHTML = '';
  let poemFavoritesHTML = '';

  poemsList.forEach((poem) => {
    if (!poem.favorite) {
      poemGridHTML += `
        <div class="poem-container">
          <button class="poem-button js-open-button ${poem.collection}" data-title="${poem.title}">
            <h3>${poem.title}</h3>
            <p>${poem.numeral} ~ ${dateButtonConversion(poem.pubDate)}</p>
          </button>
        </div>
      `;
    } else {
      poemFavoritesHTML += `
        <div class="poem-container">
          <button class="poem-button js-open-button ${poem.collection}" data-title="${poem.title}">
            <h3>${poem.title}</h3>
            <p>${poem.numeral} ~ ${dateButtonConversion(poem.pubDate)}</p>
          </button>
        </div>
      `;
    }
    
    poemWindowsHTML += `
      <dialog class="poem-window" id='${poem.title}'>
        <div class="poem-window-header">
          <button class="poem-window-close js-close-button" data-title="${poem.title}">&#10008;</button>
          <button class="poem-window-favorite js-favorite-button ${poem.favorite ? 'favorited' : ''}" data-title="${poem.title}">${poem.favorite ? '&#9733;' : '&#9734;'}</button>
          <div class="poem-window-date">${dateWindowConversion(poem.pubDate)}</div>
        </div>
        <h2>${poem.title}</h2>
        <div class="poem-text-container">
        <p class="poem-window-text">${poem.contentConversion()}</p>
        </div>

        <div class="poem-window-footer">
          <button class="poem-window-footer-close js-close-button" data-title="${poem.title}">Close</button>
        </div>
        
      </dialog>
    `;
  });

  document.querySelector('.js-poem-grid').innerHTML = poemGridHTML;
  document.querySelector('.js-poem-windows').innerHTML = poemWindowsHTML;

  if (poemFavoritesHTML) {
    document.querySelector('.js-favorites-grid').classList.add('favorites-grid');

    document.querySelector('.js-favorites-grid').innerHTML = poemFavoritesHTML;
  } else {
    document.querySelector('.js-favorites-grid').classList.remove('favorites-grid');

    document.querySelector('.js-favorites-grid').innerHTML = 'You have not added any favorites.';
  }

  attachEventListeners();
}

function attachEventListeners() {
  document.querySelectorAll('.js-open-button').forEach(button => {
    button.addEventListener('click', () => {
      const title = button.dataset.title;
      const poem = poemsList.find(p => p.title === title);
      if (poem) poem.open();
    });
  });

  document.querySelectorAll('.js-close-button').forEach(button => {
    button.addEventListener('click', () => {
      const title = button.dataset.title;
      const poem = poemsList.find(p => p.title === title);
      if (poem) poem.close();
    });
  });

  document.querySelectorAll('dialog').forEach(dialog => {
    dialog.addEventListener('cancel', (event) => {
      event.preventDefault();
      const poem = poemsList.find(p => p.title === dialog.id);
      if (poem) poem.close();
    });
  });

  document.querySelectorAll('.js-favorite-button').forEach(button => {
    button.addEventListener('click', () => {
      const title = button.dataset.title;
      const poem = poemsList.find(p => p.title === title);
      if (poem) {
        poem.favorite = !poem.favorite;
        button.classList.toggle('favorited');
        button.innerHTML = poem.favorite ? '&#9733;' : '&#9734;';
      }
    });
  });
}

export function saveFavorite() {
  const favoriteTitles = poemsList
    .filter(poem => poem.favorite)
    .map(poem => poem.title);

  localStorage.setItem('favoriteTitles', JSON.stringify(favoriteTitles));
}

function loadFavorites() {
  const savedFavorites = localStorage.getItem('favoriteTitles') ;
  if (!savedFavorites) return;

  const favoriteTitles = JSON.parse(savedFavorites);

  poemsList.forEach(poem => {
    if (favoriteTitles.includes(poem.title)) {
      poem.favorite = true;
    }
  });
}

loadFavorites();
renderPoemsPage();