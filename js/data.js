import {
  createObject
} from './create-object.js'

// Создание случайных массивов

const getArray = () => new Array(10)
  .fill(null)
  .map(() => createObject());

export {
  getArray
};
