class Poem {
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
  }
}

let testPoem = new Poem({
    title: "panopticon",
    pubDate: new Date(2025, 11, 31),
    numeral: "ix",
    collection: "storybook",
    content: "feigning to dance for an audience of one<br>while scurrying within the panopticon<br>eyeing every prisoner until my eyes ache<br>giving little but stares to prevent their escape<br><br>i take good care and give no reason to stay<br>allowing space between for assumptions astray<br>i declare that it matters to no one but myself<br>fearing the feeling'll be fulfilled by anybody else<br><br>i think it to myself and don't show it enough<br>idling 'til the day someone calls out my bluff<br>so i'll sway every vein and tune every nerve<br>until everyone i meet feels the love they deserve",
    favorite: false
  });

console.log(testPoem);

const allPoems = [
  {
    title: "panopticon",
    pubDate: new Date(2025, 11, 31),
    numeral: "ix",
    collection: "storybook",
    content: "feigning to dance for an audience of one<br>while scurrying within the panopticon<br>eyeing every prisoner until my eyes ache<br>giving little but stares to prevent their escape<br><br>i take good care and give no reason to stay<br>allowing space between for assumptions astray<br>i declare that it matters to no one but myself<br>fearing the feeling'll be fulfilled by anybody else<br><br>i think it to myself and don't show it enough<br>idling 'til the day someone calls out my bluff<br>so i'll sway every vein and tune every nerve<br>until everyone i meet feels the love they deserve",
    favorite: false
  }
]