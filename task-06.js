"use strict";

let input;
const numbers = [];
let total = 0;

do {
  input = prompt("Укажите число");
  if (input !== null) {
    if (Number.isNaN(+input)) {
      alert(`Было введено не число, попробуйте еще раз`);
      continue;
    }
    numbers.push(+input);
  } else {
    for (let i = 0; i < numbers.length; i += 1) {
      total += numbers[i];
    }
    console.log(`Общая сумма чисел равна ${total}.`);
  }
} while (input !== null);