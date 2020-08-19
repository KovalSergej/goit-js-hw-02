"use strict";

const findLongestWord = (string) => {
  const wordsArray = string.split(" ");
  let biggestWord = "";

  for (let word of wordsArray) {
    if (word.length > biggestWord.length) {
      biggestWord = word;
    }
  }
  return biggestWord;
};
/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'

console.log(findLongestWord("Google do a roll")); // 'Google'

console.log(findLongestWord("May the force be with you")); // 'force'