"use strict";

let input;
const numbers = [];

do {
  input = prompt("Укажите число");
  if (input !== null) {
    if (Number.isNaN(+input)) {
      alert(`Было введено не число, попробуйте еще раз`);
      continue;
    }
    numbers.push(+input);
  } else {
    let total = 0;
    for (let number of numbers) {
      total += number;
    }
    console.log(`Общая сумма чисел равна ${total}.`);
  }
} while (input !== null);
