// /* eslint-disable indent */
// /* global L:readonly */
import {
  sendData
} from './api.js'
import {
  ADDRRES_OF_COORDINATES,
  resetMainMarkerPosition
} from './leaflet-map.js'

// Изменение значений полей "Тип жилья" и "Цена за ночь"

const TYPE_OF_HOUSING = document.querySelector('#type');
const TYPE_OF_PRICE = document.querySelector('#price');
const APPARTMENTS = ['bungalow', 'flat', 'house', 'palace'];
const PRICE = [0, 1000, 5000, 10000];

const TIME_OF_IN = document.querySelector('#timein');
const TIME_OF_OUT = document.querySelector('#timeout');

const NUMBER_OF_ROOMS = document.querySelector('#room_number');
const NUMBER_OF_SEATS = document.querySelector('#capacity');

const orderForm = document.querySelector('.ad-form');

const TIMEOUT_TIME = 3000;

const resetButton = document.querySelector('.ad-form__reset');

const changeHousing = (type, price, evt) => {
  for (let i = 0; i <= PRICE.length - 1; i++) {
    if (evt.target.value === type[i]) {
      TYPE_OF_PRICE.placeholder = price[i];
      TYPE_OF_PRICE.min = price[i];
    }
  }
};

TYPE_OF_HOUSING.addEventListener('change', (evt) => {
  changeHousing(APPARTMENTS, PRICE, evt);
});

// Изменение значений полей "Время заезда" и "Время выезда"

const onSelectTimeChange = (evt) => {
  evt.target.id === 'timein' ?
    (TIME_OF_OUT.selectedIndex = TIME_OF_IN.selectedIndex) :
    (TIME_OF_IN.selectedIndex = TIME_OF_OUT.selectedIndex);
};

TIME_OF_IN.addEventListener('change', onSelectTimeChange);
TIME_OF_OUT.addEventListener('change', onSelectTimeChange);

// Изменение значений полей "Количество комнат" и "Количество мест"

const getAttribute = (object) => {
  for (let i = 0; i <= object.length - 1; i++) {
    object[i].setAttribute('disabled', '');
  }
  return object
};

const checkingValidity = (evt, idValue, secondValue) => {
  if (evt.target.id === 'room_number') {
    const INDEX_VALUE = idValue.selectedIndex;
    const OPTIONS_VALUE = secondValue.options;
    getAttribute(OPTIONS_VALUE);
    if (INDEX_VALUE === 0) {
      secondValue.selectedIndex = 2;
      OPTIONS_VALUE[2].removeAttribute('disabled');
    } else if (INDEX_VALUE === 1) {
      secondValue.selectedIndex = 1;
      OPTIONS_VALUE[1].removeAttribute('disabled');
      OPTIONS_VALUE[2].removeAttribute('disabled');
    } else if (INDEX_VALUE === 2) {
      secondValue.selectedIndex = 0;
      OPTIONS_VALUE[0].removeAttribute('disabled');
      OPTIONS_VALUE[1].removeAttribute('disabled');
      OPTIONS_VALUE[2].removeAttribute('disabled');
    } else if (INDEX_VALUE === 3) {
      secondValue.selectedIndex = 3;
      OPTIONS_VALUE[3].removeAttribute('disabled');
    }
  }
};

NUMBER_OF_ROOMS.addEventListener('change', (evt) => {
  checkingValidity(evt, NUMBER_OF_ROOMS, NUMBER_OF_SEATS);
});

// Дествия при отправки формы

const cleanPage = () => {
  const TITLE = document.querySelector('#title');
  TITLE.value = '';
  TYPE_OF_HOUSING.selectedIndex = 1;
  TYPE_OF_PRICE.placeholder = '1000';
  TYPE_OF_PRICE.value = '';
  TIME_OF_IN.selectedIndex = 0;
  TIME_OF_OUT.selectedIndex = 0;
  NUMBER_OF_ROOMS.selectedIndex = 0;
  NUMBER_OF_SEATS.selectedIndex = 2;
  const FEATURE_CHECKBOX = document.querySelectorAll('.feature__checkbox');
  FEATURE_CHECKBOX.forEach((element) => {
    element.checked = false;
  });
  const DESCRRIPTION = document.querySelector('#description');
  DESCRRIPTION.value = '';
  resetMainMarkerPosition();
  ADDRRES_OF_COORDINATES.value = '35.68950, 139.69171';
};

const onFail = () => {
  const ERROR = document.querySelector('#error').content.querySelector('.error');
  const ERROR_ELEMENT = ERROR.cloneNode(true);
  document.body.append(ERROR_ELEMENT);

  const ERROR_BUTTON = ERROR_ELEMENT.querySelector('.error__button');

  ERROR_BUTTON.addEventListener('click', () => {
    document.body.removeChild(ERROR_ELEMENT);
  });
};

const sentSuccessfully = () => {
  const SUCCESS = document.querySelector('#success').content.querySelector('.success');
  const SUCCESS_ELEMENT = SUCCESS.cloneNode(true);
  document.body.append(SUCCESS_ELEMENT);
  cleanPage();

  setTimeout(() => {
    SUCCESS_ELEMENT.remove();
  }, TIMEOUT_TIME);
};

orderForm.addEventListener('submit', (evt) => {
  evt.preventDefault();

  sendData(
    () => sentSuccessfully(),
    () => onFail(),
    new FormData(evt.target),
  );
});

// Действия при отчистки

resetButton.addEventListener('click', (evt) => {
  evt.preventDefault();

  cleanPage();
})
