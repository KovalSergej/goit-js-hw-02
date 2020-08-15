"use strict";

const findLongestWord = function (string) {
  let wordsArray = string.split(" ");
  let biggestWord = "";

  for (let i = 0; i < wordsArray.length; i += 1) {
    if (wordsArray[i].length > biggestWord.length) {
      biggestWord = wordsArray[i];
      continue;
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
