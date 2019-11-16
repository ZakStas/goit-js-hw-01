'use strict';

const country = prompt('Укажите страну доставки');
const deliveryСountry = 'В вашей стране доставка не доступна';
let message;
let price;

if (country !== null) {
  switch (country.toLowerCase()) {
    case 'китай':
      price = 100;
      break;

    case 'чили':
      price = 250;
      break;

    case 'австралия':
      price = 170;
      break;

    case 'индия':
      price = 80;
      break;

    case 'ямайка':
      price = 120;
      break;

    default:
      message = deliveryСountry;
  }
} else {
  message = 'Отменено пользователем!';
}

if (message === undefined) {
  message = `Доставка в ${country[0].toUpperCase()}${country
    .slice(1)
    .toLowerCase()} будет стоить ${price} кредитов`;
}
alert(message);