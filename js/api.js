import {
  loadingError
} from './utils.js';

// Загрузка данных

const getData = (onSucces) => {
  fetch('https://22.javascript.pages.academy/keksobooking/data')
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Не удалось загрузить данные с сервера!');
    })
    .then((array) => {
      onSucces(array);
    })
    .catch(() => {
      loadingError('Что-то пошло не так, попробуйте перезагрузить страницу!');
    });
};

// Отправка

const sendData = (onSuccess, onFail, body) => {
  fetch(
    'https://22.javascript.pages.academy/keksobooking', {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onFail();
      }
    })
    .catch(() => {
      onFail();
    });
};

export {
  getData,
  sendData
};
