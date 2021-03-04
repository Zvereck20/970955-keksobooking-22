import {
  LOUD_MAP
} from './leaflet-map.js';

const FORM = document.querySelector('.ad-form');
const MAP = document.querySelector('.map__filters')


const addClass = (object, teg) => {
  const CLASS_NAME = object.className;
  object.classList.add(`${CLASS_NAME}--disabled`);

  const FIELDSET = object.querySelectorAll(teg);

  FIELDSET.forEach(element => {
    element.setAttribute('disabled', '');
  });

  return object;
}

if (!LOUD_MAP) {
  addClass(FORM, 'fieldset');
  addClass(MAP, 'select');
}
