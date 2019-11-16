'use strict';

let input;

let total = 0;

while (input !== null) {
 input = prompt('Введите число:');

 total += Number(input);
}

const message = `Общая сумма чисел равна ${total}`;

alert(message);