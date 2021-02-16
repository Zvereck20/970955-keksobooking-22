/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import {createObject} from './create-object.js'

// Создание случайных массивов

const getArray = () => {
  let newArray = [];
  for (let i = 0; i < 10; i++) {
    newArray.push(createObject());
  }
  return newArray;
};

const CHECK = getArray();

export {CHECK};
