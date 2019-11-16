'use strict';

const total = 100;

const ordered = 80;

const result = ordered <= total;

let message;

if (result) {
  message = 'Заказ оформлен, с вами свяжется менеджер!';
} else {
  message = 'На складе недостаточно товаров!';
}
console.log(message);