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
const NUMBER = [0, 1, 2];


const onSelectTimeChange = (timeValue, verificationTime, evt) => {
  if (evt.target.id = timeValue) {

    for (let i = 0; i <= NUMBER.length - 1; i++) {
      if (timeValue.selectedIndex === NUMBER[i]) {
        verificationTime.selectedIndex = NUMBER[i];
      }
    }
  }
};

TIME_OF_IN.addEventListener('change', (evt) => {
  onSelectTimeChange(TIME_OF_IN, TIME_OF_OUT, evt);
});

TIME_OF_OUT.addEventListener('change', (evt) => {
  onSelectTimeChange(TIME_OF_OUT, TIME_OF_IN, evt);
});
