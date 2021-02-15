/* eslint-disable no-unused-vars */
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

export {
  getRandomnInteger,
  getRandomFractional
};
