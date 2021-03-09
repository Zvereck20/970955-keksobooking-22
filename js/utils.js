/* eslint-disable no-undef */
// Функция возвращает целое число

let getRandomnInteger = (minNumber, maxNumber) => {
  if (minNumber >= maxNumber) {
    throw new Error('проверьте введенные значения');
  }
  return Math.round(Math.random() * (maxNumber - minNumber) + minNumber);
};

// Функция, возвращающая случайное число с плавающей точкой

let getRandomFractional = (minNumber, maxNumber, anotherNumber = 1) => {
  if (minNumber >= maxNumber) {
    throw new Error('проверьте введенные значения');
  }
  let randomNumber = Math.random() * (maxNumber - minNumber) + minNumber;
  return randomNumber.toFixed(anotherNumber);
};

// Функция создающаю случайный массив из другого массива

const getRandomArrayElement = (array) => {
  return array[_.random(0, array.length - 1)];
};


export {
  getRandomnInteger,
  getRandomFractional,
  getRandomArrayElement
};
