/* eslint-disable no-cond-assign */
// Изменение значений полей "Тип жилья" и "Цена за ночь"

const TYPE_OF_HOUSING = document.querySelector('#type');
const APPARTMENTS = ['bungalow', 'flat', 'house', 'palace'];
const PRICE = [0, 1000, 5000, 10000];

const changeHousing = (type, price, evt) => {
  const TYPE_OF_PRICE = document.querySelector('#price');

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

const TIME_OF_IN = document.querySelector('#timein');
const TIME_OF_OUT = document.querySelector('#timeout');

const onSelectTimeChange = (evt) => {
  evt.target.id === 'timein' ?
    (TIME_OF_OUT.selectedIndex = TIME_OF_IN.selectedIndex) :
    (TIME_OF_IN.selectedIndex = TIME_OF_OUT.selectedIndex);
};

TIME_OF_IN.addEventListener('change', onSelectTimeChange);
TIME_OF_OUT.addEventListener('change', onSelectTimeChange);

// Изменение значений полей "Количество комнат" и "Количество мест"

const NUMBER_OF_ROOMS = document.querySelector('#room_number');
const NUMBER_OF_SEATS = document.querySelector('#capacity');

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
