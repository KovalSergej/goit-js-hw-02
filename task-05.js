"use strict";

const checkForSpam = function (message) {
  let symbolsArray = message.toLowerCase();
  let clearString = symbolsArray.replace(/[^a-zA-Z ]/g, "");
  let clearWordsArray = clearString.split(" ");

  let deniedWords = ["spam", "sale"];
  let result;
  for (let i = 0; i <= deniedWords.length; i += 1) {
    if (clearWordsArray.includes(deniedWords[i])) {
      result = clearWordsArray.includes(deniedWords[i]);
      break;
    } else {
      result = clearWordsArray.includes(deniedWords[i]);
    }
  }
  return result;
};

console.log(checkForSpam("Latest technology news")); // false

console.log(checkForSpam("JavaScript weekly newsletter")); // false

console.log(checkForSpam("Get best sale offers now!")); // true

console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
