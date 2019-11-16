'use strict';

const credits = 23580;
const pricePerDroid = 3000;

let message;

const amount = prompt('Какое количество дроидов хотите приобрести?');
const totalPrice = pricePerDroid * amount;
const canBuy = totalPrice <= credits;
const balance = credits - totalPrice;

if (amount === null) {
  message = 'Отменено пользователем!';
} else if (canBuy) {
  message = `Вы купили ${amount} дроидов, на счету осталось ${balance} кредитов.`;
} else { 
  message = 'Недостаточно средств на счету!';
}

console.log (message);