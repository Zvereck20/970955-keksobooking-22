// /* eslint-disable indent */
// /* global L:readonly */
import {
  sendData
} from './api.js';
import {
  ADDRRES_OF_COORDINATES,
  resetMainMarkerPosition
} from './leaflet-map.js';
import {
  cleanFilters
} from './filters.js';
import {
  PREVIEW_IMG,
  removeImage
} from './avatar.js';

// Изменение значений полей "Тип жилья" и "Цена за ночь"

const TYPE_OF_HOUSING = document.querySelector('#type');
const TYPE_OF_PRICE = document.querySelector('#price');
const APPARTMENTS = ['bungalow', 'flat', 'house', 'palace'];
const PRICE = [0, 1000, 5000, 10000];

const TIME_OF_IN = document.querySelector('#timein');
const TIME_OF_OUT = document.querySelector('#timeout');

const NUMBER_OF_ROOMS = document.querySelector('#room_number');
const NUMBER_OF_SEATS = document.querySelector('#capacity');

const ORDER_FORM = document.querySelector('.ad-form');

const TIMEOUT_TIME = 3000;

const Types = {
  ZERO: 0,
  FIRST: 1,
  SECOND: 2,
  THIRD: 3,
};

const RESET_BUTTON = document.querySelector('.ad-form__reset');

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

const checkingSelected = (value) => {
  const optionsValue = value.options;

  for (let i = 0; i<= optionsValue.length -1; i++) {

    if (optionsValue[i].getAttribute('selected') !== '') {
      optionsValue[i].setAttribute('disabled', '');
    }
  }
};

checkingSelected(NUMBER_OF_SEATS);

const checkingValidity = (evt, idValue, secondValue) => {
  const optionsValue = secondValue.options;
  getAttribute(optionsValue);
  if (evt.target.id === 'room_number') {
    const indexValue = idValue.selectedIndex;
    if (indexValue === Types.ZERO) {
      secondValue.selectedIndex = Types.SECOND;
      optionsValue[2].removeAttribute('disabled');
    } else if (indexValue === Types.FIRST) {
      secondValue.selectedIndex = Types.FIRST;
      optionsValue[1].removeAttribute('disabled');
      optionsValue[2].removeAttribute('disabled');
    } else if (indexValue === Types.SECOND) {
      secondValue.selectedIndex = Types.ZERO;
      optionsValue[0].removeAttribute('disabled');
      optionsValue[1].removeAttribute('disabled');
      optionsValue[2].removeAttribute('disabled');
    } else if (indexValue === Types.THIRD) {
      secondValue.selectedIndex = Types.THIRD;
      optionsValue[3].removeAttribute('disabled');
    }
  }
};

NUMBER_OF_ROOMS.addEventListener('change', (evt) => {
  checkingValidity(evt, NUMBER_OF_ROOMS, NUMBER_OF_SEATS);
});

// Дествия при отправки формы

const cleanPage = () => {
  const title = document.querySelector('#title');
  title.value = '';
  TYPE_OF_HOUSING.selectedIndex = Types.FIRST;
  TYPE_OF_PRICE.placeholder = PRICE[1];
  TYPE_OF_PRICE.value = '';
  TIME_OF_IN.selectedIndex = Types.ZERO;
  TIME_OF_OUT.selectedIndex = Types.ZERO;
  NUMBER_OF_ROOMS.selectedIndex = Types.ZERO;
  NUMBER_OF_SEATS.selectedIndex = Types.SECOND;
  const featureCheckbox = document.querySelectorAll('.feature__checkbox');
  featureCheckbox.forEach((element) => {
    element.checked = false;
  });
  const description = document.querySelector('#description');
  description.value = '';
  resetMainMarkerPosition();
  ADDRRES_OF_COORDINATES.value = '35.68950, 139.69171';
  PREVIEW_IMG.src = 'img/muffin-grey.svg'
  removeImage();

};

const onFail = () => {
  const error = document.querySelector('#error').content.querySelector('.error');
  const errorElement = error.cloneNode(true);
  const mainDocument = document.body;
  mainDocument.append(errorElement);

  const ERROR_BUTTON = errorElement.querySelector('.error__button');

  ERROR_BUTTON.addEventListener('click', () => {
    mainDocument.removeChild(errorElement);
  });

  mainDocument.addEventListener('keydown', (evt) => {
    if (evt.key === ('Escape' || 'Esc')) {
      mainDocument.removeChild(errorElement);
    }
  })
};


const sentSuccessfully = () => {
  const success = document.querySelector('#success').content.querySelector('.success');
  const successElement = success.cloneNode(true);
  document.body.append(successElement);
  cleanPage();
  cleanFilters();

  setTimeout(() => {
    successElement.remove();
  }, TIMEOUT_TIME);
};

ORDER_FORM.addEventListener('submit', (evt) => {
  evt.preventDefault();

  sendData(
    () => sentSuccessfully(),
    () => onFail(),
    new FormData(evt.target),
  );
});

// Действия при отчистки

RESET_BUTTON.addEventListener('click', (evt) => {
  evt.preventDefault();
  cleanPage();
  cleanFilters();
})
