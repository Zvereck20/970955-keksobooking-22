/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import {
  createObject
} from './create-object.js'

// Создание случайных массивов

const getArray = () => new Array(1)
  .fill(null)
  .map(() => createObject());

export {
  getArray
};
