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
    this.name = poemDetails.name;
    this.numeral = poemDetails.numeral;
    this.content = poemDetails.content;
    this.favorite = poemDetails.favorite;
  };

  contentConversion() {
    return this.content.replace(/\n/g, '<br>');
  }
}