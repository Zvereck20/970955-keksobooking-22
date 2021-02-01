// Функция возвращает целое число

// eslint-disable-next-line no-unused-vars
const RETURN_INTEGER = (minNumber, maxNumber) => {
  if (minNumber >= maxNumber) {
    return 'Не верно введенные числа'
  }
  return Math.round(Math.random() * (maxNumber - minNumber) + minNumber);
};


// Функция, возвращающая случайное число с плавающей точкой

// eslint-disable-next-line no-unused-vars
const RETURN_FRACTIONAL = (minNumber, maxNumber, anotherNumber = 1) => {
  let randomNumber;
  if (minNumber >= maxNumber) {
    return 'Не верно введенные числа'
  }
  // eslint-disable-next-line no-unused-vars
  randomNumber = Math.random() * (maxNumber - minNumber) + minNumber;
  return randomNumber.toFixed(anotherNumber);
};
