/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

// Функция возвращает целое число

let returnRandomnInteger = (minNumber, maxNumber) => {
  return Math.round(Math.random() * (maxNumber - minNumber) + minNumber);
};

// Функция, возвращающая случайное число с плавающей точкой

let returnRandomFractional = (minNumber, maxNumber, anotherNumber = 1) => {
  let randomNumber = Math.random() * (maxNumber - minNumber) + minNumber;
  return randomNumber.toFixed(anotherNumber);
};

const TYPES_RANDOM = [
  'palace',
  'flat',
  'house',
  'bungalow',
];

const CHECK_IN_OUT_TYMES = [
  '12:00',
  '13:00',
  '14:00',
];

const FEATURES_ARRAY = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const PHOTOS_ARRAY = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
];

let returnRandomArrayElement = (elements) => {
  return elements[_.random(0, elements.length - 1)];
};

const GET_OBJECT = () => {
  return {
    author: {
      avatar: `img/avatars/user/0${returnRandomnInteger(1, 8)}.png`,
    },
    offer: {
      title: 'Лучший выбор',
      address: `x: ${returnRandomFractional(35.65000, 35.70000, 5)} y: ${returnRandomFractional(139.70000, 139.80000, 5)}`,
      price: returnRandomnInteger(1, 100),
      type: returnRandomArrayElement(TYPES_RANDOM),
      rooms: returnRandomnInteger(1, 5),
      quests: returnRandomnInteger(1, 10),
      checkin: returnRandomArrayElement(CHECK_IN_OUT_TYMES),
      checkout: returnRandomArrayElement(CHECK_IN_OUT_TYMES),
      features: FEATURES_ARRAY.slice(returnRandomnInteger(0, 5)),
      description: 'Чистота, уют и комфорт',
      photos: PHOTOS_ARRAY.slice(returnRandomnInteger(0, 2)),
    },
    location: {
      x: returnRandomFractional(35.65000, 35.70000, 5),
      y: returnRandomFractional(139.70000, 139.80000, 5),
    },
  };
};

const CREATE_ARRAY = () => {
  let newArray = [];
  for (let i = 0; i < 10; i++) {
    newArray.push(GET_OBJECT());
  }
  return newArray;
};

const CHECK = CREATE_ARRAY();
