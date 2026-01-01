import { poemsList } from './poemsList.js';
import { dateButtonConversion, dateWindowConversion } from './utils/dates.js';

console.log(dateButtonConversion(poemsList[0].pubDate));
console.log(dateWindowConversion(poemsList[0].pubDate));