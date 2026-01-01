import { poemsList } from './poemsList.js';
import { dateButtonConversion, dateWindowConversion } from './utils/dates.js';

function renderPoemsPage() {
  let poemGridHTML = '';
  let poemWindowsHTML = '';

  poemsList.forEach((poem) => {
    poemGridHTML += `
      <div class="poem-container ${poem.collection}">
        <button class="poem-button" onclick="
        openPoem('${poem.title}');
        ">
          <h3>${poem.title}</h3>
          <p>${poem.numeral} ~ ${dateButtonConversion(poem.pubDate)}</p>
        </button>
      </div>
    `;

    poemWindowsHTML += `
      <dialog class="poem-window" id='${poem.title}'>
        <div class="poem-window-header">
          <button class="poem-window-close" onclick="closePoem('${poem.title}')">&#10008;</button>
          <button class="poem-window-favorite">&#9734;</button>
          <div class="poem-window-date">${dateWindowConversion(poem.pubDate)}</div>
        </div>
        <h2>${poem.title}</h2>
        <p>${poem.contentConversion()}</p>

        <div class="poem-window-footer">
          <button class="poem-window-footer-close" onclick="closePoem('${poem.title}')">Close</button>
        </div>
        
      </dialog>
    `;
  });

  document.querySelector('.js-poem-grid').innerHTML = poemGridHTML;
  document.querySelector('.js-poem-windows').innerHTML = poemWindowsHTML;
}

renderPoemsPage();