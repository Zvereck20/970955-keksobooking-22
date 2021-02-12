/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import {CREATE_OBJECT} from './create-object.js'

// Создание случайного массива из другого массива

const getRandomArrayElement = (array) => {
  return array[_.random(0, array.length - 1)];
};

// Создание случайных массивов

const GET_ARRAY = () => {
  let newArray = [];
  for (let i = 0; i < 10; i++) {
    newArray.push(CREATE_OBJECT());
  }
  return newArray;
};

const CHECK = GET_ARRAY();

export {CHECK, getRandomArrayElement};
