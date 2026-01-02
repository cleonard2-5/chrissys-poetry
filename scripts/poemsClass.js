import { renderPoemsPage, needRefresh, setNeedRefresh } from "./poems.js";

export class Poem {
  title;
  pubDate;
  numeral;
  collection;
  content;
  favorite;

  constructor(poemDetails) {
    this.title = poemDetails.title;
    this.pubDate = poemDetails.pubDate;
    this.collection = poemDetails.collection;
    this.numeral = poemDetails.numeral;
    this.content = poemDetails.content;
    this.favorite = poemDetails.favorite;
  };

  open() {
    const dialog = document.getElementById(this.title);
    if (dialog) {
      dialog.showModal();
      dialog.scrollTop = 0;
    }
  }

  close() {
    const dialog = document.getElementById(this.title);
    if (dialog) {
      dialog.classList.add('hide');
      setTimeout(() => {
        dialog.close();
        dialog.classList.remove('hide');

        if (needRefresh) {
          renderPoemsPage();
          setNeedRefresh(false);
          console.log('refreshed');
        }
      }, 500);
    }
  }

  contentConversion() {
    return this.content.replace(/\n/g, '<br>');
  }
}