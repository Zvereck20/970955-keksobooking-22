// Изменение значений полей "Тип жилья" и "Цена за ночь"

const TYPE_OF_HOUSING = document.querySelector('#type');

TYPE_OF_HOUSING.addEventListener('change', (evt) => {
  const TYPE_OF_PRICE = document.querySelector('#price');

  if (evt.target.value === 'bungalow') {
    TYPE_OF_PRICE.placeholder = 0;
    TYPE_OF_PRICE.min = 0;
  } else if (evt.target.value === 'flat') {
    TYPE_OF_PRICE.placeholder = 1000;
    TYPE_OF_PRICE.min = 1000;
  } else if (evt.target.value === 'house') {
    TYPE_OF_PRICE.placeholder = 5000;
    TYPE_OF_PRICE.min = 5000;
  } else if (evt.target.value === 'palace') {
    TYPE_OF_PRICE.placeholder = 10000;
    TYPE_OF_PRICE.min = 10000;
  }
});

// Изменение значений полей "Время заезда" и "Время выезда"

const TIME_OF_IN = document.querySelector('#timein');
const TIME_OF_OUT = document.querySelector('#timeout');

TIME_OF_IN.addEventListener('change', (evt) => {

  if (evt.target.value === '12:00') {
    TIME_OF_OUT.selectedIndex = 0;
  } else if (evt.target.value === '13:00') {
    TIME_OF_OUT.selectedIndex = 1;
  } else if (evt.target.value === '14:00') {
    TIME_OF_OUT.selectedIndex = 2;
  }
});

TIME_OF_OUT.addEventListener('change', (evt) => {

  if (evt.target.value === '12:00') {
    TIME_OF_IN.selectedIndex = 0;
  } else if (evt.target.value === '13:00') {
    TIME_OF_IN.selectedIndex = 1;
  } else if (evt.target.value === '14:00') {
    TIME_OF_IN.selectedIndex = 2;
  }
});
