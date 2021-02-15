/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import {
  CHECK
} from './data.js';

import {
  getRandomnInteger
} from './util.js';

console.log(getRandomnInteger(1, 1));

// /* eslint-disable no-console */
// /* eslint-disable no-unused-vars */
// /* eslint-disable no-undef */

// // Функция возвращает целое число

// let getRandomnInteger = (minNumber, maxNumber) => {
//   return Math.round(Math.random() * (maxNumber - minNumber) + minNumber);
// };


// // Функция, возвращающая случайное число с плавающей точкой

// let getRandomFractional = (minNumber, maxNumber, anotherNumber = 1) => {
//   let randomNumber = Math.random() * (maxNumber - minNumber) + minNumber;
//   return randomNumber.toFixed(anotherNumber);
// };

// // Создание случайного массива из другого массива

// const getRandomArrayElement = (array) => {
//   return array[_.random(0, array.length - 1)];
// };

// const BUILDING_RANDOM = [
//   'palace',
//   'flat',
//   'house',
//   'bungalow',
// ];

// const CHECK_IN_OUT_TIMES = [
//   '12:00',
//   '13:00',
//   '14:00',
// ];

// const FEATURES = [
//   'wifi',
//   'dishwasher',
//   'parking',
//   'washer',
//   'elevator',
//   'conditioner',
// ];

// const PHOTOS = [
//   'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
//   'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
//   'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
// ];

// const LOCATION_X = getRandomFractional(35.65000, 35.70000, 5);
// const LOCATION_Y = getRandomFractional(139.70000, 139.80000, 5);

// const CREATE_OBJECT = () => {
//   return {
//     author: {
//       avatar: `img/avatars/user/0${getRandomnInteger(1, 8)}.png`,
//     },
//     offer: {
//       title: 'Лучший выбор',
//       address: `x: ${LOCATION_X} y: ${LOCATION_Y}`,
//       price: getRandomnInteger(1, 100),
//       type: getRandomArrayElement(BUILDING_RANDOM),
//       rooms: getRandomnInteger(1, 5),
//       quests: getRandomnInteger(1, 10),
//       checkin: getRandomArrayElement(CHECK_IN_OUT_TIMES),
//       checkout: getRandomArrayElement(CHECK_IN_OUT_TIMES),
//       features: FEATURES.slice(getRandomnInteger(0, 5)),
//       description: 'Чистота, уют и комфорт',
//       photos: PHOTOS.slice(getRandomnInteger(0, 2)),
//     },
//     location: {
//       x: LOCATION_X,
//       y: LOCATION_Y,
//     },
//   };
// };

// const GET_ARRAY = () => {
//   let newArray = [];
//   for (let i = 0; i < 10; i++) {
//     newArray.push(CREATE_OBJECT());
//   }
//   return newArray;
// };

// const CHECK = GET_ARRAY();

// console.log(CHECK);
