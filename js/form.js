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

const lem = (bem) => {
  for (let i = 0; i <= bem.length - 1; i++) {
    bem[i].setAttribute('disabled', '');
  }
  return bem
};

const lol = (evt, idValue, secondValue) => {
  if (evt.target.id === 'room_number') {
    const rem = idValue.selectedIndex;
    const bem = secondValue.options;
    lem(bem);
    if (rem === 0) {
      secondValue.selectedIndex = 2;
      bem[2].removeAttribute('disabled');
    } else if (rem === 1) {
      secondValue.selectedIndex = 1;
      bem[1].removeAttribute('disabled');
      bem[2].removeAttribute('disabled');
    } else if (rem === 2) {
      secondValue.selectedIndex = 0;
      bem[0].removeAttribute('disabled');
      bem[1].removeAttribute('disabled');
      bem[2].removeAttribute('disabled');
    } else if (rem === 3) {
      secondValue.selectedIndex = 3;
      bem[3].removeAttribute('disabled');
    }
  }
};

NUMBER_OF_ROOMS.addEventListener('change', (evt) => {
  lol(evt, NUMBER_OF_ROOMS, NUMBER_OF_SEATS);
});
