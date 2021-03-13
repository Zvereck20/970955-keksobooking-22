/* eslint-disable no-unused-vars */
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

// Окно ошибки загрузки данных

const loadingError = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '15px 5px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.color = 'white';
  alertContainer.style.backgroundColor = '#ee3643';
  alertContainer.style.border = '5px solid black';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, 5000);
};

export {
  loadingError
};
